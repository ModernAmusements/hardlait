<script>
import Screen from '~/components/global/Screen.vue';
export default {
	components: {
		Screen
	},
}

</script>
<template>
	<main class="homepage">
		<Header />
		<!-- DVD -->
		<section class="">
			<Screen />
		</section>
		<!-- DVD -->
		<!-- About -->
		<section class="homepage-hero self-start flex flex-col flex-1 items-between">
			<div class="homepage-about">
				<h1 class="text-center uppercase">NIKOLAS</h1>
				<h1 class="text-center uppercase">ARDELEY</h1>
			</div>
			<div class="homepage-about">
				<h1 class="text-center uppercase">CREATIVE</h1>
				<h1 class="text-center uppercase">DIRECTOR</h1>
				<h1 class="text-center uppercase">/</h1>
				<h1 class="text-center uppercase">DESIGNER</h1>
			</div>
			<div class="homepage-about">
				<h1 class="text-center uppercase">CURRENTLY</h1>
				<h1 class="text-center uppercase">BASED</h1>
				<h1 class="text-center uppercase">IN</h1>
				<h1 class="text-center uppercase">PARIS</h1>
			</div>
			<div class="homepage-about">
				<h1 class="text-center uppercase">READY</h1>
				<h1 class="text-center uppercase">TO</h1>
				<h1 class="text-center uppercase">MOVE</h1>
				<h1 class="text-center uppercase">IF</h1>
				<h1 class="text-center uppercase">NEEDED</h1>
			</div>
		</section>
		<!-- About -->
		<section class="about-hero-2 flex flex-col flex-1 items-between">
			<div class="homepage-about">
				<h1 class="text-center uppercase">Computer</h1>
				<h1 class="text-center uppercase">Boy</h1>
			</div>
			<div class="homepage-about">
				<p class="text-center uppercase word-spacing">Nikolas Ardeley or “Hardlait”,
					is an Art Director & multidisciplinary designer. After a career in the advertising industry in South
					East Asia and Europe</p>
			</div>
			<div class="homepage-about">
				<p class="text-center uppercase word-spacing">the self-taught 3D artist moved towards a more visual
					approach.</p>
			</div>
			<div class="homepage-about">
				<p class="text-center uppercase word-spacing">READIBILITY</p>
				<p class="text-center uppercase word-spacing">IS</p>
				<p class="text-center uppercase word-spacing">OVERRATED</p>
			</div>
			<div class="homepage-about">
				<p class="text-center uppercase word-spacing">CHEN</p>
			</div>
		</section>
		<section class="homepage-hero self-start flex flex-col flex-1 items-between">
			<div class="homepage-about">
				<h1 class="text-center uppercase">SEE MY FACE</h1>
			</div>
		</section>
		<Footer />
	</main>
</template>
<style lang="postcss" scoped>
h1 {
	margin-top: 0;
}

.word-spacing {
	word-spacing: 2rem;
	text-align: left;
}

.projects-homepage {
	z-index: 10;
	width: 100%;
}

.projects-layout {
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding-top: 0.5rem;
}



.homepage-hero {
	width: 100%;
	padding: 0.5rem;
	justify-content: flex-start;
	font-size: 2.25rem;
	line-height: 2rem;
	z-index: 19;
}

.about-hero-2 {
	width: 100%;
	padding: 0.5rem;
	justify-content: flex-start;
	font-size: 1rem;
	z-index: 19;
}

.homepage-about {
	display: flex;
	align-items: baseline;
	justify-content: space-between;

}


@media only screen and (max-width: 768px) {

	.homepage-hero {
		justify-content: flex-start;
		font-size: 1rem;
		line-height: 1rem;
	}

	.projects-layout {
		flex-direction: column;
	}

	.word-spacing {
		word-spacing: unset;
		text-align: left;
	}
}
</style>