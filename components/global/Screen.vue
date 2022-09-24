<template>
  <div class="hl-dvd" v-bind:style="ScreenContainerStyle">
    <div v-bind:style="ScreenStyle">
      <dvd v-bind:dvdProps="dvdProps"></dvd>
      <div class="text-center hl-dvd-toggle">
        <span id="dvdToggle">DVD MODE (ON)</span>
        <span id="dvdToggleOff">DVD MODE (OFF)</span>
        <p class="info">click to interact</p>
      </div>
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
        position: 'absolute'
      },
      ScreenStyle: {
        backgroundColor: '#fafafa',
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
.hl-dvd-toggle {
  position: absolute;
  cursor: pointer;
  top: 84vh;
  left: 47.2vw;
  font-size: 12px;
}

.info {
  font-size: 9px;
}

@media only screen and (max-width: 1024px) {
  .hl-dvd {
    display: none !important;
  }
}
</style>
