<template>
  <!-- POSTS -->
  <div v-if="posts.length > 0" class="z-20">
    <div class="project" v-for="(post, index) in posts" :key="index">
      <div class="headline-date">
        <h4 class="headline mr-0 md:mr-2" :class="{ projectActive: hover }">
          {{ post.title }}
        </h4>
        <h4 :style="{ color: `${post.color}` }" v-if="post.createdAt" class="date mt-0 mr-0 md:mr-2">
          {{ formatDate(post.createdAt) }}
        </h4>
      </div>
      <nuxt-link :to="`/${postType}/${post.slug}`" class="">
        <template v-if="postType === 'projects'">
          <!-- Info  -->
          <div class="post-info">
            <p :style="{ color: `${post.color}` }" class="">{{ post.description }}</p>
            <p :style="{ color: `${post.color}` }" class="inline-block category mt-0">
              {{ post.category }}
            </p>
            <p :style="{ color: `${post.color}` }" class="mt-0">- More</p>
          </div>
        </template>
        <!-- blog -->
        <template v-else class="bg-img" :style="{ backgroundImage: `url(${post.cover})` }">
          <div class="flex justify-between align-baseline">
            <h3 class="">{{ post.title }}</h3>
            <h6 v-if="post.createdAt"
              class="date self-start inline-block mt-0 py-1 px-2 bg-gray text-white text-base font-medium rounded-sm whitespace-no-wrap">
              {{ formatDate(post.createdAt) }}</h6>
          </div>
          <p class="mt-2 subtitle">{{ post.description }}</p>
        </template>
        <!-- blog -->
      </nuxt-link>
      <div class="project-bg" :style="{ backgroundImage: `url(${post.cover})` }"></div>
    </div>
  </div>
  <!-- POSTS -->
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
      <content-placeholders :rounded="true" :class="placeholder">
        <content-placeholders-heading />
      </content-placeholders>
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    postType: {
      type: String,
      default: 'blog',
      validator: (val) => ['blog', 'projects'].includes(val),
    },
    amount: { // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: { // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'desc' // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    }
  },
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6'];
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])]; // repeats classes after one another
    }
  },
  async mounted() {
    this.loading = true;
    this.posts = await this.fetchPosts();
    this.loading = false;
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { year: 'numeric' }
      return date.toLocaleDateString('en', options)
    },
    async fetchPosts(
      postType = this.postType,
      amount = this.amount,
      sortBy = this.sortBy,
    ) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || []);
    }
  },
}
</script>
<style lang="postcss" scoped>
.project {
  padding: 0.5rem 0.5rem 0 0.5rem;
}

h4.headline.projectActive {
  color: var(--bg)
}

.project-bg {
  display: none;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  inset: 0;
}

.headline-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.headline {
  color: var(--text);
  z-index: 20;
}

.date {
  display: none;
  z-index: 20;
}

.post-info {
  display: none;
  flex-direction: column;
  z-index: 20;
}

.project:hover {
  & .headline {
    cursor: pointer;
    color: white;
  }

  & .date {
    display: block;
  }

  & .project-bg {
    transition: all 0.5s ease;
    display: flex;
  }
}

.project:hover {

  & .post-info {
    display: flex;
  }
}
</style>