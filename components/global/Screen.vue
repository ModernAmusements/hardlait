<template>
  <div class="hl-dvd" v-bind:style="ScreenContainerStyle">
    <div v-bind:style="ScreenStyle">
      <dvd v-bind:dvdProps="dvdProps"></dvd>
    </div>
  </div>
</template>

<script>
import dvd from './Dvd.vue'

const TV_SCREEN_WIDTH = window.innerWidth
const TV_SCREEN_HEIGHT = window.innerHeight

export default {
  name: 'Screen',
  components: {
    dvd: dvd
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidht: window.innerWidth,
      ScreenContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
      },
      ScreenStyle: {
        backgroundColor: 'transparent',
        width: `${TV_SCREEN_WIDTH}px`,
        height: `${TV_SCREEN_HEIGHT}px`
      },
      dvdProps: {
        ScreenWidth: TV_SCREEN_WIDTH,
        ScreenHeight: TV_SCREEN_HEIGHT
      }
    }
  }
}
</script>

<style>

</style>
