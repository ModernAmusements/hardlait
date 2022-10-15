<template>
  <nuxt-link class="z-40" @click.native="to ? null : $router.go(-2)" :to="to ? to : '/'">
    <slo>go back</slo>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { // ? Override with a path instead of router back
      type: String,
      default: '',
    },
  },
}
</script>