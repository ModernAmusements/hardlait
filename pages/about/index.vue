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
		<Preloader />
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
		<Footer />
	</main>
</template>
<style lang="postcss" scoped>
h1 {
	margin-top: 0;
}

.projects-homepage {
	z-index: 10;
}

.projects-layout {
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	flex-wrap: wrap;
}



.homepage-hero {
	width: 100%;
	padding: 0.5rem;
	justify-content: flex-start;
	z-index: 20;

}

.homepage-about {
	display: flex;
	align-items: baseline;
	justify-content: space-between;

}


@media only screen and (max-width: 768px) {
	main.homepage {
		padding-bottom: 10rem !important;
	}

	.homepage-hero {
		justify-content: flex-start;
	}

	.projects-layout {
		flex-direction: column;
	}
}
</style>