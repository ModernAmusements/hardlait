<template>
  <main>
    <section v-if="post">

      <article class="work-subpage">

        <div class="post-category">
          <h6 :style="{ color: `${post.color}` }"
            class="inline my-2 px-2 mr-1 bg-white  text-sm font-medium rounded-sm">
            {{ post.category }}
          </h6>
        </div>
        <div class="project-title">
          <p :style="{ color: `${post.color}` }">{{ post.title }}</p>
        </div>

        <div class="post-info z-20">
          <p :style="{ color: `${post.color}` }" class="">{{ post.description }}</p>
          <p :style="{ color: `${post.color}` }" class="inline-block category mt-0">
            {{ post.category }}
          </p>
          <router-back class="block text-white" />
        </div>



        <div class="work-subpage-img">

          <div class="project-bg" :style="{ backgroundImage: `url(${post.cover})` }"></div>
        </div>

        <nuxt-content :document="post" />
        <div v-if="post.gallery" class="nuxt-content">
          <img v-for="image in post.gallery" class="image" :key="image.id" :src="image">
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
}
</script>

<style lang="postcss">
nav {
  padding: 0.5rem;
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
  padding: 0.5rem;

  & .project-title {
    z-index: 20;
  }
}
</style>