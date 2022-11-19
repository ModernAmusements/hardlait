<template>
  <main>
    <HeaderProject />
    <article class="post-images" ref="scroll_container" @mousewheel="scrollX" v-if="post">
      <div class="project-bg" v-for="image in post.gallery" :key="image.id" :src="image"
        :style="{ backgroundImage: `url(${image})` }">
      </div>
      <div class="project-bg" :style="{ backgroundImage: `url(${post.cover})` }">
      </div>
    </article>
    <section class="project-hero self-start flex flex-col flex-1 items-between" v-if="post">
      <div class="homepage-about">
        <h1 :style="{ color: `${post.color}` }" class="uppercase">{{ post.description }}</h1>
        <h1 :style="{ color: `${post.color}` }" class="uppercase">{{ post.category }}</h1>
      </div>
    </section>
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
        <div class="post-info">
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
    <FooterDvdOff />
  </main>
</template>

<script>

export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("projects", params.project).fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { post };
  },
  data() {
    return {
      isVisible: false,
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
    scrollX(e) {
      this.$refs['scroll_container'].scrollLeft += e.deltaY;
    },
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
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: var(--text);
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

.project-bg:nth-of-type(2) {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  width: 100vw;
  transform: translateX(-15vw);
}

.project-bg:nth-of-type(3) {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  width: 100vw;
  transform: translateX(-15vw);
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

  .work-credits {
    grid-column: 1 / 6;
    position: absolute;
    top: 30rem;
  }
}
</style>