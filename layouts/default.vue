<template>
  <div class="wrapper">
    <nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 4500) // 4500
    })
  }
}



</script>