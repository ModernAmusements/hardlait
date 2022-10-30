<script>
import Preloader from '~/components/global/Preloader.vue';
import Screen from '~/components/global/Screen.vue';
export default {
  name: 'ColorModePicker',
  components: {
    Screen,
    Preloader
  },
  data() {
    return {
      hover: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}

</script>
<template>
  <main class="homepage" :class="{ projectActive: hover }">
    <Preloader />
    <!-- DVD -->
    <section class="">
      <Screen />
    </section>
    <!-- DVD -->
    <!-- Works -->
    <section class="projects-homepage">
      <posts class="projects-layout" post-type="projects" :amount="10" @mouseover.native="hover = true"
        @mouseleave.native="hover = false" />
    </section>
    <!-- Works -->
    <section class="homepage-hero self-start flex flex-col flex-1 items-between">
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
    <Footer />
  </main>
</template>
<style lang="postcss" scoped>
h1 {
  margin-top: 0;
}

.projects-homepage {
  z-index: 10;
}

.projects-layout {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
}



.homepage-hero {
  width: 100%;
  padding: 0.5rem;
  justify-content: flex-end;
  z-index: 20;
}

.homepage-about {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

/* .homepage-about.projectActive {
  & h1 {
    color: var(--bg)
  }

} */

@media only screen and (max-width: 768px) {
  main.homepage {
    padding-bottom: 10rem !important;
  }

  .homepage-hero {
    justify-content: end;
  }

  .projects-layout {
    flex-direction: column;
  }
}
</style>