<template>
	<main>
		<div class="loading-page" v-if="loading">
			<lottie :width="1920" :height="1080" :loop="true" :autoPlay="true" :speed="1"
				@AnimControl="setAnimController" :options="lottieOptions" v-on:animCreated="handleAnimation" />
		</div>
	</main>
</template>
  
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/animation.json";
export default {
	components: {
		lottie
	},
	data: () => ({
		loading: false,
		anim: null,
		lottieOptions: { animationData: animationData.default }
	}),
	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		},
		handleAnimation: function (anim) {
			this.anim = anim;
		}
	}
}
</script>
  
<style lang="postcss" scoped>
.loading-page {
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	background-color: var(--bg) !important;
	z-index: 100 !important;
	width: 100vw !important;
	height: 100vh !important;
	flex-direction: column !important;
	position: unset !important;
	top: unset !important;
	left: unset !important;
	text-align: unset !important;
	padding-top: unset !important;
	font-size: unset !important;
	font-family: 'On Diatype Standard' !important;
}
</style>