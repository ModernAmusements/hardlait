<template>
  <main>
    <section v-if="post">
      <article class="work-subpage">
        <div class="headline-date">
          <h1 class="headline mr-2" :style="{ color: `${post.color}` }">
            {{ post.title }}
          </h1>
          <h4 :style="{ color: `${post.color}` }" v-if="post.createdAt" class="date mt-0">
            {{ formatDate(post.createdAt) }}
          </h4>
        </div>
        <!-- Info  -->
        <div class="post-info">
          <p :style="{ color: `${post.color}` }" class="">{{ post.description }}</p>
          <p :style="{ color: `${post.color}` }" class="inline-block category mt-0">
            {{ post.category }}
          </p>
        </div>


        <div class="post-info">
          <router-back class="block text-white" />
          <p :style="{ color: `${post.color}` }" class="mt-0">[+] More</p>
        </div>






        <nuxt-content :document="post" />

      </article>

      <div v-if="post.gallery" class="nuxt-content">
        <img v-for="image in post.gallery" class="image" :key="image.id" :src="image">
        <img :src="post.cover" alt="">
      </div>
      <div class="nuxt-content">
        <img :src="post.cover" alt="">
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
nav {
  position: fixed;
}



.project-bg {
  display: flex;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  inset: 0;
}

.work-subpage {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  position: fixed;

  & .project-title {
    z-index: 20;
  }
}

.headline-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.headline {
  cursor: pointer;
  font-size: 20px;
}

.date {
  z-index: 20;
}

.post-info {
  display: flex;
  z-index: 20;
  justify-content: space-between;
}

.nuxt-content {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 0;
  margin-top: 0;
  margin-bottom: 0;

  & img {
    display: flex;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    inset: 0;
    margin-top: 0;
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
}

img:nth-child(1) {
  left: 0vw;
  width: 77.777vw;
}

img:nth-child(2) {
  left: 77vw;
}

img:nth-child(3) {
  left: 177vw;
}

img:nth-child(4) {
  left: 100vw;
}

img:nth-child(5) {
  left: 100vw;
}

img:nth-child(6) {
  left: 100vw;
}

@media only screen and (max-width: 768px) {

  .work-subpage {
    width: 100%;
  }
}
</style>