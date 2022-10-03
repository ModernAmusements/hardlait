
<template>
	<footer class="w-full fixed left-0 bottom-0 text-white text-2xl">
		<ul class="footer-menu">
			<li class="footer-link-1">
				<nuxt-link class="uppercase" to="/#">Projects</nuxt-link>
			</li>
			<li class="footer-link-2">
				<nuxt-link class="uppercase" to="/#">About</nuxt-link>
			</li>
			<li class="footer-link-3">
				<div class="text-center hl-dvd-toggle">
					<img class="dvd-placeholder" src="~/assets/dvd_logo.png" />
					<span id="dvdToggle">DVD MODE (ON)</span>
					<span id="dvdToggleOff">DVD MODE (OFF)</span>
					<p class="info">click to interact</p>
				</div>
			</li>
			<li class="trademark">
				<nuxt-link class="uppercase" to="/#">Hardlait© <span class="hidden md:inline-block"> {{ date }}</span>
				</nuxt-link>
			</li>
		</ul>
	</footer>
</template>
  
<script>

export default {
	name: 'Footer',
	data() {
		return {
			date: new Date().getFullYear(),
		};
	},
}
</script>
  
<style lang="postcss">
footer {
	padding: 0.5rem;
	z-index: 20;

	& .footer-menu {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		font-size: 1rem;
		align-items: flex-end;

		& li.trademark {
			grid-column: 5 / 6;
			justify-self: flex-end;
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
	z-index: 100;

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
		& .footer-menu {
			display: grid;
			grid-template-rows: repeat(3, 1.5rem);
			grid-template-columns: auto;
			font-size: 1rem;
			align-items: flex-end;

			& li.trademark {
				grid-column: unset;
				justify-self: end;
				align-content: center;
				writing-mode: vertical-rl;
				align-self: end;
				grid-row: 3;
				padding-top: 0.5rem;
				transform: rotate(180deg);
				font-size: 9px;
				width: 25px;
				height: 90px;
			}
		}
	}

	.footer-link-1 {
		grid-row: 1;
	}

	.footer-link-2 {
		grid-row: 2;
	}

	.footer-link-3 {
		grid-row: 3;
	}

	.hl-dvd-toggle {
		flex-direction: row-reverse;
		align-items: center;
		justify-content: flex-end;
		font-size: 1rem;

	}

	.hl-dvd-toggle:hover {
		& .info {
			display: none;
		}
	}
}
</style>
  