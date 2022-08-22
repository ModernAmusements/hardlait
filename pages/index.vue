<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <div class="homepage-hero" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500"
        data-tilt-scale="1.1" data-tilt-reverse="true">
        <h1 class="title text-center">Hardlait</h1>
        <h2 class="subtitle text-center">In Production</h2>
      </div>
    </section>
    <!-- 
    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section> -->
  </main>
</template>
<style lang="postcss">
.homepage-hero {
  background-color: #fff;
  padding: 10rem;
}
</style>