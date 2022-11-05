<template>
  <main>
    <HeaderProject />
    <section class="layout-subpage" v-if="post">
      <article class="work-subpage">
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
      <div class="project-bg" :src="post.cover" :style="{ backgroundImage: `url(${post.cover})` }">
      </div>
      <div class="project-bg" v-for="image in post.gallery" :key="image.id" :src="image"
        :style="{ backgroundImage: `url(${image})` }">
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
  }
}
</script>

<style lang="postcss" scoped>
.layout-subpage {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.post-project {
  display: none;
}

.post-project.show {
  display: block;
  position: absolute;
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
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  inset: 0;
}





@media only screen and (max-width: 768px) {

  .work-subpage {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    grid-column: 1 / 6;
    grid-row: 2;
  }

}
</style>