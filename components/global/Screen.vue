<template>
  <div v-bind:style="ScreenContainerStyle">
    <div v-bind:style="ScreenStyle">
      <dvd v-bind:dvdProps="dvdProps"></dvd>
    </div>
    <div class="panel-body">
      <!--Only code you need is this label-->
      <label class="switch">
        <input type="checkbox" @click="toggleCheckbox">
        <div class="slider round">
        </div>
      </label>
      <div class="text-center">
        <p>DVD MODE: {{ checkbox }}</p>
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
      checkbox: false,
      windowHeight: window.innerHeight,
      windowWidht: window.innerWidth,
      ScreenContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
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
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    }
  }
}
</script>

<style>
.hl-dvd-toggle {
  position: relative;
  top: -15vh;
}

.panel-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: -10vh;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: #101010;
}

input:focus+.slider {
  box-shadow: 0 0 1px #101010;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
