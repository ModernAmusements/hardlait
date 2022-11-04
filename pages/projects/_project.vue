<template>
  <main>
    <section v-if="post">
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
          <router-back class="block text-white" />
          <p :style="{ color: `${post.color}` }" class="mt-0">[+] More</p>
        </div>


        <nuxt-content :document="post" />

      </article>


      <div class="work-subpage-img">
        <div class="work-subpage-img-scroll">
          <img class="project-bg" :src="post.cover">
          <img class="project-bg" v-for="image in post.gallery" :key="image.id" :src="image"
            :style="{ backgroundImage: `url(${image})` }">
        </div>
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
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { year: 'numeric' }
      return date.toLocaleDateString('en', options)
    },
  }
}
</script>

<style lang="postcss" scoped>
.work-subpage {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  position: fixed;
  z-index: 21;

  & .project-title {
    z-index: 20;
  }
}

.headline-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 1rem;
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

.work-subpage-img {

  overflow: auto;
  white-space: nowrap;
  background: transparent;
  height: 100vh;
  width: 100vw;

  & .work-subpage-img-scroll {
    display: flex;
    flex-direction: row;

  }

  & .project-bg {
    display: inline-block;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    inset: 0;
  }
}





@media only screen and (max-width: 768px) {

  .work-subpage {
    width: 100%;
  }

  .work-subpage-img {

    overflow: auto;
    white-space: nowrap;
    background: transparent;
    height: 100vh;
    width: 100vw;

    & .work-subpage-img-scroll {
      display: flex;
      flex-direction: column;

    }

    & .project-bg {
      width: 100%;
      height: auto;
    }
  }
}
</style>