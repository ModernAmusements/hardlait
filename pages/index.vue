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
    <section class="projects">
      <posts class="projects-layout" post-type="projects" :amount="100" />
    </section>
    <section class="homepage-hero self-start flex flex-col flex-1 items-between">
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
  </main>
</template>
<style lang="postcss" scoped>
h1 {
  margin-top: 0;
}

.projects {
  z-index: 10;
}

.projects-layout {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  padding: 0.5rem;
}

.homepage-hero {
  z-index: 1;
  width: 100%;
  padding: 0.5rem;
  justify-content: flex-end;
}

.homepage-about {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  .homepage-hero {
    justify-content: center;
  }

  .projects-layout {
    flex-direction: column;
  }

}
</style>