<template>
  <div v-bind:style="dvdLogoStyle">
    <img src="~/assets/dvd_logo.png" v-bind:style="dvdLogoImageStyle" />
  </div>
</template>

<script>
const DVD_LOGO_WIDTH = 150
const DVD_LOGO_HEIGHT = 100

var rand = (max) => {
  return Math.floor(Math.random() * max)
}



export default {
  name: 'DvdLogo',
  props: ['dvdLogoProps'],
  data() {
    return {
      dvdLogoStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${DVD_LOGO_WIDTH}px`,
        height: `${DVD_LOGO_HEIGHT}px`,
        backgroundColor: `rgb(255, 255, 255,0)`,
        transform: 'translate(0px, 0px)'
      },
      dvdLogoImageStyle: {
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

    var interval = setInterval(() => {
      this.posX += changeX
      this.posY += changeY

      var isRight = this.posX >= this.dvdLogoProps.tvScreenWidth - DVD_LOGO_WIDTH
      var isLeft = this.posX <= 0
      var isTop = this.posY <= 0
      var isBottom = this.posY >= this.dvdLogoProps.tvScreenHeight - DVD_LOGO_HEIGHT

      var isHorizontalBoundary = isLeft || isRight
      var isVerticalBounday = isTop || isBottom

      if (isHorizontalBoundary && isVerticalBounday) {
        clearInterval(interval)
      }
      if (isHorizontalBoundary) {
        changeX *= -1

      }
      if (isVerticalBounday) {
        changeY *= -1

      }

      this.dvdLogoStyle.transform = `translate(${this.posX}px, ${this.posY}px)`
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
