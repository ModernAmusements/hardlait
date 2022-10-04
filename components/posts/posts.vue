<template>
  <!-- POSTS -->
  <div v-if="posts.length > 0" class="">
    <div class="project" v-for="(post, index) in posts" :key="index">
      <div class="headline-date">
        <h4 class="headline mr-0 md:mr-2">{{ post.title }}</h4>
        <h6 v-if="post.createdAt" class="date">
          {{ formatDate(post.createdAt) }}</h6>
      </div>
      <nuxt-link :to="`/${postType}/${post.slug}`" class="">
        <template v-if="postType === 'projects'">
          <!-- Info  -->
          <div class="bg-img" :style="{ backgroundImage: `url(${post.cover})` }">
          </div>
          <div class="post-info">
            <p class="">{{ post.description }}</p>
            <p class="inline-block category mt-0">
              {{ post.category }}
            </p>
            <p class="mt-0">- More</p>
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
      return date.toLocaleDateString(process.env.lang) || ''
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
.headline-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.date {
  display: none;
}

.post-info {
  display: none;
  flex-direction: column;
}

.project .headline-date:hover {
  & .headline {
    transition: all 0.5s ease;
    color: var(--color-primary);
    cursor: pointer;
  }

  & .date {
    display: block;
  }

  & .post-info {
    display: flex;
    flex-direction: column;
  }
}

.project:hover {

  & .post-info {
    display: flex;
    flex-direction: column;
  }
}



.bg-img {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin-top: 0;
  width: 100vw;
  position: relative;
  display: none;
}
</style>