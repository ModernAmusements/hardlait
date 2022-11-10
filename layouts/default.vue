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

      setTimeout(() => this.$nuxt.$loading.finish(), 90000) // 4500
    })
  }
}



</script>