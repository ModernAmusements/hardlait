
<template>
	<footer class="w-full fixed left-0 bottom-0 text-white text-2xl px-3">
		<ul class="footer-menu">
			<li>
				<nuxt-link class="uppercase" to="/projects">Projects</nuxt-link>
			</li>
			<li>
				<nuxt-link class="uppercase" to="/#">About</nuxt-link>
			</li>
			<li>
				<div class="text-center hl-dvd-toggle">
					<img class="dvd-placeholder" src="~/assets/dvd_logo.png" />
					<span id="dvdToggle">DVD MODE (ON)</span>
					<span id="dvdToggleOff">DVD MODE (OFF)</span>
					<p class="info">click to interact</p>
				</div>
			</li>
			<li class="trademark">
				<nuxt-link class="uppercase" to="/#">Hardlait™ 2022</nuxt-link>
			</li>
		</ul>
	</footer>
</template>
  
<script>

export default {
	name: 'Footer'
}
</script>
  
<style lang="postcss" scoped>
footer {
	& .footer-menu {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		font-size: 1rem;
		align-items: flex-end;

		& li.trademark {
			grid-column: 5 / 6;
			justify-self: end;
		}
	}
}

.dvd-placeholder {
	width: 10%;
	height: auto;
}

.hl-dvd-toggle {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	color: var(--text);
	cursor: crosshair;

	& .info {
		font-size: 9px;
		display: none
	}
}

.hl-dvd-toggle:hover {
	& .info {
		display: block;
	}
}

.nuxt-link-exact-active {
	@apply text-primary;
}

@media only screen and (max-width: 768px) {
	footer {
		flex-direction: column;
		align-items: start;
	}
}
</style>
  