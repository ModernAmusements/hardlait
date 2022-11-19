<template>
  <nav class=" z-10 top-0 inset-x-0 project-header" aria-label="Main Menu">
    <nuxt-link class="" to="/">
      Hardlait
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderProject'
}
</script>

<style lang="postcss">
.project-header {
  & a.nuxt-link-active {
    color: var(--color-gray-900)
  }
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: flex-start;
  position: absolute;
}


@media only screen and (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}
</style>
