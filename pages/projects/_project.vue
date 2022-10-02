<template>
  <main>
    <section v-if="post">
      <!-- <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav> -->
      <!-- 
      <article class="work-subpage">
        <div class="post-category">
          <h6 class="inline py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category }}</h6>
        </div>
        <div class="project-title">
          <h1>{{ post.title }}</h1>
        </div>
        <div class="project-description">
          <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        </div>
        <div class="work-subpage-img">
          <img v-if="post.cover" class="cover-image" :src="post.cover">
        </div> -->
      <!-- Gallery -->
      <!-- <nuxt-content :document="post" />
        <div v-if="post.gallery" class="nuxt-content">
          <img v-for="image in post.gallery" class="image" :key="image.id" :src="image">
        </div> -->
      <!-- Gallery -->
      <!-- </article> -->
    </section>
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
.work-subpage {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-auto-rows: minmax(80px, auto);
  align-items: center;
  grid-gap: 10px;

  & .work-subpage-img {
    grid-column: 5 / 12;
    grid-row: 1;
    z-index: 2;

    & img {
      width: 100%;
      height: auto;
      max-height: 500px;
      @apply w-full object-cover rounded my-4;
    }
  }

  & .project-title {
    grid-column: 1 / 12;
    grid-row: 1;
    z-index: 1;

    & h1 {
      color: var(--color-primary);
      white-space: normal;
      hyphens: auto;
      line-height: 6rem;
      text-transform: uppercase;
      font-size: 10vw;
    }
  }
}
</style>