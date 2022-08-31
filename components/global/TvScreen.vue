<template>
  <div v-bind:style="tvScreenContainerStyle">
    <div v-bind:style="tvScreenStyle">
      <dvdlogo v-bind:dvdLogoProps="dvdLogoProps"></dvdlogo>
    </div>
  </div>
</template>

<script>
import DvdLogo from './DvdLogo.vue'

const TV_SCREEN_WIDTH = 800
const TV_SCREEN_HEIGHT = 400

export default {
  name: 'TvScreen',
  components: {
    dvdlogo: DvdLogo
  },
  data() {
    return {
      tvScreenContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      },
      tvScreenStyle: {
        backgroundColor: '#fafafa',
        width: `${TV_SCREEN_WIDTH}px`,
        height: `${TV_SCREEN_HEIGHT}px`
      },
      dvdLogoProps: {
        tvScreenWidth: TV_SCREEN_WIDTH,
        tvScreenHeight: TV_SCREEN_HEIGHT
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
