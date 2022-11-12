<template>
	<main>
		<div class="loading-page" v-if="loading">
			<div class="preloading-text-about-top">
				<span class="about-text" v-for="preLoadItem in 150">
					<p :id="preLoadItem.id_aka" class="aka">HARDLAIT</p>
					<p :id="preLoadItem.id_dash" class="dash">-</p>
					<p :id="preLoadItem.id_name" class="name">NIKOLAS</p>
					<p :id="preLoadItem.id_lastname" class="lastname">ARDELEY</p>
					<p :id="preLoadItem.id_dir" class="dir">DIRECTOR</p>
					<p :id="preLoadItem.id_cgi" class="cgi">CGI</p>
				</span>
			</div>

			<div class="preloading-text">
				<p>PRELOADING</p>
				<p>PRELOADING</p>
				<p>PRELOADING</p>
				<p>PRELOADING</p>
			</div>
			<div class="preloading-text-about-buttom">
				<span class="about-text" v-for="preLoadItem in 150">
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

	}),

	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		},
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


		& .about-text {
			display: flex;


			& p {
				margin-top: 0;
				margin-right: .5rem;

			}
		}

	}


}
</style>