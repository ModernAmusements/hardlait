<template lang="html">
	<main>
		<div class="loading-page" v-if="loading">
			<div class="preloading-text-about-top">
				<div class="about-text" v-for="(menuItem, index) in menuItems" :key="index">
					<p class="aka">{{ menuItem.aka }}</p>
					<p class="dash">{{ menuItem.dash }}</p>
					<p class="name">{{ menuItem.name }}</p>
					<p class="lastname">{{ menuItem.lastname }}</p>
					<p class="dir">{{ menuItem.dir }}</p>
					<p class="cgi">{{ menuItem.cgi }}</p>
				</div>
			</div>
			<div class="preloading-text move-right">
				<p>Preloading</p>
				<p>Preloading</p>
				<p>Preloading</p>
				<p>Preloading</p>
				<p>Preloading</p>
				<p>Preloading</p>

			</div>
			<div class="preloading-text-about-buttom">
				<div class="about-text" v-for="(menuItem, index) in menuItems" :key="index">
					<p class="aka">{{ menuItem.aka }}</p>
					<p class="dash">{{ menuItem.dash }}</p>
					<p class="name">{{ menuItem.name }}</p>
					<p class="lastname">{{ menuItem.lastname }}</p>
					<p class="dir">{{ menuItem.dir }}</p>
					<p class="cgi">{{ menuItem.cgi }}</p>
				</div>
			</div>
		</div>
	</main>
</template>
  
<script>
export default {
	props: {
		menuItems: {
			type: Array,
			default: () => [
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},

				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},

				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
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
		loading: false
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
@keyframes moveRight {
	from {
		transform: translateX(-1920px);
	}

	to {
		transform: translateX(1920px);
	}
}

@keyframes moveLeft {
	from {
		transform: translateX(1920px);
	}

	to {
		transform: translateX(-1920px);
	}
}

.move-right {
	animation-duration: 4.5s;
	animation-name: moveRight;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

.move-left {
	animation-duration: 4.5s;
	animation-name: moveRight;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

.loading-page {
	display: flex !important;
	align-items: center !important;
	justify-content: space-between !important;
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

	& .preloading-text {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		padding: .5rem;

		& p {
			margin-top: 0;
		}
	}

	& .preloading-text-about-top,
	& .preloading-text-about-buttom {
		width: 100vw;
		padding: .5rem;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		overflow-x: hidden;
		max-width: 100%;

		& .about-text {

			display: inline-flex;
			white-space: nowrap;


			& p {
				margin-top: 0;
				margin-right: .5rem;

			}
		}
	}

}

.loading-page {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-primary);
	text-align: center;
	padding-top: 200px;
	font-size: 30px;
	font-family: sans-serif;
	z-index: 100;
}
</style>