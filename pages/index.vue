<script>
import Screen from '~/components/global/Screen.vue';
export default {
  components: {
    Screen
  },
  data() {
    return {
      hover: false,
    };
  },
}

</script>
<template>
  <main class="homepage" :class="{ projectActive: hover }">

    <Header />
    <!-- DVD -->
    <section class="">
      <Screen />
    </section>
    <!-- DVD -->
    <!-- Works -->
    <section class="projects-homepage">
      <posts class="projects-layout" post-type="projects" :amount="99" @mouseover.native="hover = true"
        @mouseleave.native="hover = false" />
    </section>
    <!-- Works -->
    <section class="homepage-hero">
      <div class="homepage-about" :class="{ projectActive: hover }">
        <h1 class="text-center uppercase">ART</h1>
        <h1 class="text-center uppercase">DIRECTOR</h1>
        <h1 class="text-center uppercase">/</h1>
        <h1 class="text-center uppercase">DESIGNER</h1>
      </div>
      <div class="homepage-about" :class="{ projectActive: hover }">
        <h1 class="text-center uppercase">CURRENTLY</h1>
        <h1 class="text-center uppercase">BASED</h1>
        <h1 class="text-center uppercase">IN</h1>
        <h1 class="text-center uppercase">PARIS</h1>
      </div>
      <div class="homepage-about" :class="{ projectActive: hover }">
        <h1 class="text-center uppercase">READY</h1>
        <h1 class="text-center uppercase">TO</h1>
        <h1 class="text-center uppercase">FROMAGE</h1>
        <h1 class="text-center uppercase">UWU</h1>
      </div>
    </section>
    <Footer :class="{ projectActive: hover }" />
  </main>
</template>
<style lang="postcss" scoped>
h1 {
  margin-top: 0;
}

.projects-homepage {
  z-index: 10;
  width: fit-content;
}

.projects-layout {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 0.5rem;
}



.homepage-hero {
  width: 100%;
  padding: 0.5rem;
  justify-content: center;
  font-size: 2.25rem;
  line-height: 2rem;
  z-index: 19;
  bottom: 20%;
  left: 0px;
  position: fixed;
}

.homepage-about {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.homepage-about.projectActive {
  & h1 {
    color: var(--bg)
  }

}

@media only screen and (max-width: 768px) {


  .homepage-hero {
    justify-content: flex-end;
    font-size: 1rem;
    line-height: 1rem;
    padding-top: 0rem;
  }

  .projects-layout {
    flex-direction: column;
  }
}
</style>