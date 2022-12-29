<template>
  <main>
    <HeaderProject />
    <!-- <section class="project-hero self-start flex flex-col flex-1 items-between" v-if="post">
      <div class="homepage-about">
        <h1 :style="{ color: `${post.color}` }" class="uppercase">{{ post.description }}</h1>
        <h1 :style="{ color: `${post.color}` }" class="uppercase">{{ post.category }}</h1>
      </div>
    </section> -->
    <section class="layout-subpage">
      <article class="work-subpage" v-if="post">
        <!-- Title  -->
        <div class="headline-date">
          <h1 class="headline mr-2" :style="{ color: `${post.color}` }">
            {{ post.title }}
          </h1>
          <h4 :style="{ color: `${post.color}` }" v-if="post.createdAt" class="date mt-0">
            {{ formatDate(post.createdAt) }}
          </h4>
        </div>
        <!-- Title  -->
        <!-- Info  -->
        <div class="post-info" v-if="post">
          <p :style="{ color: `${post.color}` }" class="">{{ post.description }}</p>
          <p :style="{ color: `${post.color}` }" class="inline-block category mt-0">
            {{ post.category }}
          </p>
        </div>
        <!-- Info  -->
        <div class="post-info">
          <!-- <router-back class="block text-white" /> -->
          <div class="show-more">
            <p :style="{ color: `${post.color}` }" class="mt-0">
              <label class="hl-show-more-label" :class="{ show: isVisible }" @click="toggleVisible">
                <span class="hl-show-more-dash hl-show-more-dash-bottom">
                  <span class="hl-show-more-dash-span hl-show-more-dash-span-bottom"></span>
                </span>
              </label>
              More
            </p>
          </div>
          <div :class="{ show: isVisible }" class="post-project">
            <nuxt-content :style="{ color: `${post.color}` }" :document="post" />
          </div>
        </div>
      </article>
      <article class="work-credits" v-if="post">
        <!-- Info  -->
        <div class="post-credits">
          <p :style="{ color: `${post.color}` }" class="inline-block category mt-0">
            CREDITS
          </p>
          <div class="person">
            <p :style="{ color: `${post.color}` }" class="inline-block category mt-0" v-for="name in post.credits"
              :key="name.id" :src="name">
              {{ name.name }}
            </p>
          </div>
        </div>
      </article>
    </section>
    <article class="post-images scrollable-container" ref="scroll_container" @mousewheel="scrollX" v-if="post">
      <div class="post-cover-img">
        <img :src="post.cover" />
      </div>
      <template>
        <div class="image-grid-container">
          <template v-for="layoutSection in post.layout_sections">
            <template v-if="layoutSection.type === 'image_grid'">
              <div :class="layoutSection.template">
                <template v-for="image in layoutSection.images">
                  <img :src="image" :alt="layoutSection.alt" class="image-grid-item" />
                </template>
              </div>
            </template>
          </template>
        </div>
      </template>
    </article>
    <FooterDvdOff />
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'ogImage',
          name: 'ogImage',
          content: this.post.cover
        }
      ]
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("projects", params.project).fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { post };
  },
  // other component properties and methods go here
  data() {
    return {
      isVisible: false,
      layoutSections: []
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { year: 'numeric' }
      return date.toLocaleDateString('en', options)
    },
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
    scrollX(event) {
      const container = this.$refs.scroll_container;
      container.scrollLeft += event.deltaY;
    }
  }
}
</script>
<style lang="postcss" scoped>
.nuxt-content {
  color: var(--bg) !important;

  & p {
    color: var(--bg) !important;
  }
}

.text-area-1 {
  display: inline-flex;
}

.post-images {
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  width: 250vw;
  background: black;
  position: absolute;
}

.image-grid-container,
.post-cover-img {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
  inset: 0;
}

.grid-2x2 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(50%, 1fr));

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.post-cover-img {
  background-position: 50%;
  display: flex;
  align-items: center;
}

.project-hero {
  width: 100%;
  padding: 0.5rem;
  justify-content: center;
  font-size: 2.25rem;
  line-height: 2rem;
  top: 80vh;
  position: absolute;

  & h1 {
    white-space: break-spaces;
    line-height: initial;
    word-spacing: 3rem;
  }
}

.homepage-about {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.layout-subpage {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 30px);
  position: absolute;
  width: 100%;
}

.post-project.show {
  display: block;
}

.work-subpage,
.work-credits {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
}

.work-subpage {
  grid-column: 2 / 3;
}

.work-credits {
  padding-top: 0.5rem;
  grid-column: 5 / 6;
  text-align: start;
}

.person {
  display: flex;
  justify-content: space-between;
}

.post-credits {
  display: flex;
  z-index: 20;
  flex-direction: column;
  justify-content: space-between;
}

.headline-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 0.5rem;
}

.headline {
  cursor: pointer;
}

.date {
  z-index: 20;
}

.post-info {
  display: flex;
  z-index: 20;
  justify-content: space-between;
}

.project {
  padding: 0rem 0.5rem 0 0.5rem;
}

/* project color cms */
.project-bg {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  width: 100vw;
}

@media only screen and (max-width: 768px) {
  .work-subpage {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    grid-column: 1 / 6;
    grid-row: 2;
  }

  .layout-subpage {
    grid-template-rows: repeat(4, 30px);
  }

  .post-project.show {
    position: absolute;
  }

  .homepage-about {
    font-size: 1rem;
  }

  .project-bg {
    background-size: contain;
    display: inline-flex;
  }

  .work-credits {
    grid-column: 1 / 6;
    position: absolute;
    top: 30rem;
    width: 100vw;
  }
}
</style>