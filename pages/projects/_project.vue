<template>
  <main>
    <HeaderProject />
    <article class="post-images" ref="scroll_container" @mousewheel="scrollX" v-if="post">
      <!-- <div class="project-bg" :src="post.cover" :style="{ backgroundImage: `url(${post.cover})` }">
      </div> -->
      <div class="project-bg" v-for="image in post.gallery" :key="image.id" :src="image"
        :style="{ backgroundImage: `url(${image})` }">
      </div>
    </article>
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
          <div :style="{ color: `${post.color}` }" :class="{ show: isVisible }" class="post-project mt-10">
            With the creative direction of Mouthwash, my job was to setup ways to distort the image directly in 3D using
            the asset created by the team at SG. Using Octane’s powerful universal camera, we were able to stack FX
            without too much post-process.
          </div>
        </div>
        <nuxt-content :document="post" />
      </article>
    </section>
    <section class="homepage-hero self-start flex flex-col flex-1 items-between" v-if="post">
      <div class="homepage-about">
        <h1 :style="{ color: `${post.color}` }" class="uppercase">{{ post.description }}</h1>
        <h1 :style="{ color: `${post.color}` }" class="uppercase">{{ post.category }}</h1>
      </div>

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
.post-images {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: scroll;
}

.homepage-hero {
  width: 100%;
  padding: 0.5rem;
  justify-content: center;
  font-size: 2.25rem;
  line-height: 2rem;
  padding-top: 20rem;
  z-index: 19;
}

.homepage-about {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.layout-subpage {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 30px);
  position: absolute;
  width: 100%;
}

.post-project {
  display: none;
}

.post-project.show {
  display: block;
}


.work-subpage {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
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

  .post-project.show {
    position: absolute;
  }

  .homepage-about {
    font-size: 1rem;
  }

}
</style>