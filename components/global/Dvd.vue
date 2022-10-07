<template>
  <div class="z-20" v-bind:style="dvdStyle">
    <!-- <img id="dvd-img" src="~/assets/dvd_logo.png" v-bind:style="dvdImageStyle" /> -->
    <DvdComponent id="dvd-img" v-bind:style="dvdImageStyle" role="img">
      <path />
    </DvdComponent>
  </div>
</template>

<script>
const DVD_LOGO_WIDTH = 150
const DVD_LOGO_HEIGHT = 100

var rand = (max) => {
  return Math.floor(Math.random() * max)
}
var randColor = () => {
  return `rgb(${rand(256)}, ${rand(256)}, ${rand(256)})`
}
export default {
  name: 'Dvd',
  props: ['dvdProps'],
  data() {
    return {
      dvdStyle: {
        width: `${DVD_LOGO_WIDTH}px`,
        height: `${DVD_LOGO_HEIGHT}px`,
        fill: `rgb(0, 0, 0)`,
        transform: 'translate(0px, 0px)'
      },
      dvdImageStyle: {
        width: `${DVD_LOGO_WIDTH - 20}px`,
        height: `${DVD_LOGO_HEIGHT - 20}px`
      }
    }
  },
  mounted() {

    this.posX = 0
    this.posY = 0
    var changeXMag = 1
    var changeYMag = 1
    var changeX = changeXMag
    var changeY = changeYMag


    var dvd = document.getElementById('dvd-img')

    var button = document.getElementById('dvdToggle')
    var buttonOff = document.getElementById('dvdToggleOff')

    dvd.classList.add('hidden')


    button.onclick = () => {
      var interval = setInterval(() => {

        button.classList.add('hidden')
        buttonOff.classList.add('visible')
        dvd.classList.remove('hidden')

        this.posX += changeX
        this.posY += changeY
        var isRight = this.posX >= this.dvdProps.ScreenWidth - DVD_LOGO_WIDTH
        var isLeft = this.posX <= 0
        var isTop = this.posY <= 0
        var isBottom = this.posY >= this.dvdProps.ScreenHeight - DVD_LOGO_HEIGHT

        var isHorizontalBoundary = isLeft || isRight
        var isVerticalBounday = isTop || isBottom

        if (isHorizontalBoundary && isVerticalBounday) {
          clearInterval(interval)
        }
        if (isHorizontalBoundary) {
          changeX *= -1
          this.dvdStyle.fill = randColor()
        }
        if (isVerticalBounday) {
          changeY *= -1
          this.dvdStyle.fill = randColor()
        }
        buttonOff.onclick = () => {
          clearInterval(interval)
          this.dvdStyle.transform = `translate(0px, 0px)`
          button.classList.remove('hidden')
          buttonOff.classList.add('hidden')
          buttonOff.classList.remove('visible')
          dvd.classList.add('hidden')

        }
        this.dvdStyle.transform = `translate(${this.posX}px, ${this.posY}px)`

      }, 10)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#dvdToggleOff,
.dvd-img {
  display: none;
}

#dvdToggleOff.visible,
.dvd-img {
  display: block;
}
</style>
