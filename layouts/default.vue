<template>
  <div class="wrapper">
    <nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.animateWords()


    })
  }
}
</script>