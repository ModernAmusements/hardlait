<template>
  <nav class="fixed z-40 top-0 inset-x-0 pt-3 px-3" aria-label="Main Menu">
    <nuxt-link class="btn block" to="/">HARDLAIT</nuxt-link>
    <ul class="flex">
      <li class="flex-1">
        <nuxt-link class="btn block uppercase" to="/projects">Projects</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block uppercase" to="/#">Dump</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block uppercase" to="/#">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
}

.nuxt-link-exact-active {
  @apply text-primary;
}

@media only screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: start;
  }
}
</style>
