<template>
  <!-- POSTS -->
  <div v-if="posts.length > 0" class="z-20">
    <div class="project" v-for="(post, index) in posts" :key="index">
      <div class="headline-date">
        <h4 class="headline mr-2" :class="{ projectActive: hover }">
          {{ post.title }}
        </h4>
        <h4 :style="{ color: `${post.color}` }" v-if="post.createdAt" class="date mt-0">
          {{ formatDate(post.createdAt) }}
        </h4>
      </div>
      <template v-if="postType === 'projects'">
        <!-- Info  -->
        <div class="post-info">
          <p :style="{ color: `${post.color}` }" class="post-description">{{ post.description }}</p>
          <p :style="{ color: `${post.color}` }" class="inline-block category mt-0">
            {{ post.category }}
          </p>
        </div>
        <nuxt-link class="show-more" :to="`/${postType}/${post.slug}`">
          <p :style="{ color: `${post.color}` }" class="mt-0">
            <label class="hl-show-more-label" :class="{ show: isVisible }" @click="toggleVisible">
              <span class="hl-show-more-dash hl-show-more-dash-bottom">
                <span class="hl-show-more-dash-span hl-show-more-dash-span-bottom"></span>
              </span>

            </label>
            More
          </p>
        </nuxt-link>
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
      <!-- HERO -->
      <div class="project-bg" :style="{ backgroundImage: `url(${post.cover})` }" :src="`${post.cover}`">

      </div>
      <!-- HERO -->
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
      hover: false,
      isVisible: false,
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
    },
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>
<style lang="postcss" scoped>
.post-description {
  word-spacing: 3rem;
}


.project {
  padding: 0rem 0.5rem 0 0.5rem;
}

/* project color cms */



.project-bg {
  visibility: hidden;
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
  z-index: 20;
  cursor: pointer;
}

.date,
.show-more {
  display: none;
  z-index: 20;
}

.post-info {
  display: none;
  flex-direction: column;
  z-index: 20;
}

.project-bg {
  animation: glitch 100ms ease-out;
}

@keyframes glitch {

  2%,
  64% {
    transform: translate(200px, 0) skew(0deg);
  }

  4%,
  60% {
    transform: translate(-200px, 0) skew(300deg);
  }

  62% {
    transform: translate(0, 0) skew(500deg);
  }
}

.project-bg:before,
.project-bg:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.project-bg:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {

  2%,
  64% {
    transform: translate(200px, -200px);
  }

  4%,
  60% {
    transform: translate(-200px, 200px);
  }

  62% {
    transform: translate(130px, -100px) skew(-130deg);
  }
}

.project-bg:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {


  2%,
  64% {
    transform: translate(-200px, 200px);
  }

  4%,
  60% {
    transform: translate(200px, -200px);
  }

  62% {
    transform: translate(-130px, 100px) skew(130deg);
  }
}


.project:hover {
  margin-bottom: 25px;

  & .headline {
    color: var(--bg);
  }

  & .date {
    display: block;
  }

  & .project-bg {
    display: flex;
    visibility: visible;
  }

  & .post-info {
    display: flex;
  }

  & .show-more {
    display: flex;
    position: absolute;
  }

}
</style>