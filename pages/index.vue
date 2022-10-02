<script>
import Screen from '~/components/global/Screen.vue';
export default {
  name: 'ColorModePicker',
  components: {
    Screen
  },
}
</script>
<template>
  <main class="homepage">
    <section class="">
      <Screen />
    </section>

    <section class="homepage-hero self-start flex flex-col flex-1 items-between justify-end">
      <div class="homepage-about">
        <h1 class="title text-center uppercase">ART</h1>
        <h1 class="title text-center uppercase">DIRECTOR</h1>
        <h1 class="title text-center uppercase">/</h1>
        <h1 class="title text-center uppercase">DESIGNER</h1>
      </div>
      <div class="homepage-about">
        <h1 class="title text-center uppercase">CURRENTLY</h1>
        <h1 class="title text-center uppercase">BASED</h1>
        <h1 class="title text-center uppercase">IN</h1>
        <h1 class="title text-center uppercase">PARIS</h1>
      </div>
      <div class="homepage-about">
        <h1 class="title text-center uppercase">READY</h1>
        <h1 class="title text-center uppercase">TO</h1>
        <h1 class="title text-center uppercase">FROMAGE</h1>
        <h1 class="title text-center uppercase">UWU</h1>
      </div>
    </section>
    <!-- <posts post-type="projects" :amount="10" /> -->
  </main>
</template>
<style lang="postcss" scoped>
h1 {
  margin-top: 0;
}

.homepage-hero {
  z-index: 1;
  width: 100%;
  padding: 0.5rem;
}

.homepage-about {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
</style>