<template>
  <nav class="fixed z-40 top-0 inset-x-0 pt-3 px-3" aria-label="Main Menu">
    <ul class="flex">
      <li class="flex-1">
        <nuxt-link class="btn block" to="/">Home</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block" to="/projects">Projects</nuxt-link>
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
.nuxt-link-exact-active {
  @apply text-gray-200 border-gray-400 bg-gray-800 bg-opacity-25 cursor-default;
}

.light {
  & .nuxt-link-exact-active {
    @apply text-primary-700 border-gray-600 bg-gray-100;
  }
}
</style>
