<script>
import TvScreen from '~/components/global/TvScreen.vue';
export default {
  name: 'ColorModePicker',
  components: {
    TvScreen
  },
}
</script>
<template>
  <main>
    <section>
      <TvScreen />
      <p class="text-center uppercase">DVD Mode(testing)<br>On</p>
    </section>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <div class="homepage-hero">
        <h1 class="title text-center uppercase">Hardlait</h1>
        <h2 class="subtitle text-center">In Production</h2>
      </div>
    </section>


    <!-- <section class="mt-8">
      <posts post-type="projects" :amount="10" />
    </section> -->
  </main>
</template>
<style lang="postcss">
.homepage-hero {
  padding: 10rem;
}
</style>