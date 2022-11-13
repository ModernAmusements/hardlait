<template>
	<main>
		<div class="loading-page" v-if="loading">
			<div class="preloading-text-about-top">
				<span class="about-text" v-for="preLoadItem in 150" :id="['row_top_' + preLoadItem]">
					<p :id="preLoadItem.id_aka" class="aka">HARDLAIT</p>
					<p :id="preLoadItem.id_dash" class="dash">-</p>
					<p :id="preLoadItem.id_name" class="name">NIKOLAS</p>
					<p :id="preLoadItem.id_lastname" class="lastname">ARDELEY</p>
					<p :id="preLoadItem.id_dir" class="dir">DIRECTOR</p>
					<p :id="preLoadItem.id_cgi" class="cgi">CGI</p>
				</span>
			</div>

			<div class="preloading-text">
				<!-- <div v-for="preLoadItem in 6" :id="['row_middle_' + preLoadItem]"> -->

				<p v-anime="opa_1" class="preloading">PRELOADING</p>
				<p v-anime="opa_2" class="preloading">PRELOADING</p>
				<p v-anime="opa_3" class="preloading">PRELOADING</p>
				<p v-anime="opa_4" class="preloading">PRELOADING</p>

			</div>
			<div class="preloading-text-about-buttom">
				<span class="about-text" v-for="preLoadItem in 150" :id="['row_buttom_' + preLoadItem]">
					<p :id="preLoadItem.id_aka" class="aka">HARDLAIT</p>
					<p :id="preLoadItem.id_dash" class="dash">-</p>
					<p :id="preLoadItem.id_name" class="name">NIKOLAS</p>
					<p :id="preLoadItem.id_lastname" class="lastname">ARDELEY</p>
					<p :id="preLoadItem.id_dir" class="dir">DIRECTOR</p>
					<p :id="preLoadItem.id_cgi" class="cgi">CGI</p>
				</span>
			</div>
		</div>
	</main>
</template>
  
<script>



export default {

	props: {
		preLoadItems: {
			type: Array,
			default: () => [
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},

			],
		},
	},
	data: () => ({
		loading: false,
		opa_1: {
			opacity: [0, 1],
			duration: 500,
			easing: 'easeInOutSine',
			delay: 500,
		},
		opa_2: {
			opacity: [0, 1],
			duration: 500,
			easing: 'easeInOutSine',
			delay: 1000,
		},
		opa_3: {
			opacity: [0, 1],
			duration: 500,
			easing: 'easeInOutSine',
			delay: 1500,
		},
		opa_4: {
			opacity: [0, 1],
			duration: 500,
			easing: 'easeInOutSine',
			delay: 2000,
		},

	}),

	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		}

	}
}
</script>
  
<style lang="postcss" scoped>
@keyframes slidein {
	from {
		transform: translateX(0%);
	}

	to {
		transform: translateX(100%);
	}
}

.loading-page {
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	background-color: var(--bg) !important;
	z-index: 100 !important;
	height: 100vh !important;
	overflow: hidden;
	flex-direction: column !important;
	position: unset !important;
	top: unset !important;
	left: unset !important;
	text-align: unset !important;
	padding-top: unset !important;
	font-family: 'On Diatype Standard' !important;
	font-size: 16px !important;


	& .preloading-text {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;


		& p {
			margin-top: 0;
		}
	}



	& .preloading-text-about-top,
	& .preloading-text-about-buttom {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		align-items: start;

		& .about-text {
			display: flex;
			animation: slidein 5s;


			& p {
				margin-top: 0;
				margin-right: .5rem;


			}
		}




	}


}
</style>