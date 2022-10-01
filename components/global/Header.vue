<template>
  <nav class="fixed z-40 top-0 inset-x-0" aria-label="Main Menu">
    <nuxt-link class="" to="/">
      <img src="~/assets/hl-wordmark.svg" />
    </nuxt-link>
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
  padding: 0.5rem;
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
