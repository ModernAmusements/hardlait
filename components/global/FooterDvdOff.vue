
<template>
	<footer class="w-full fixed left-0 bottom-0 text-white">
		<ul class="footer-menu">
			<li class="footer-link-1">
				<nuxt-link to="/#">Projects</nuxt-link>
			</li>
			<li class="footer-link-2">
				<nuxt-link to="/#">About</nuxt-link>
			</li>
			<li class="footer-link-3">
				<div class="text-center hl-dvd-toggle">
					<DvdComponent class="dvd-placeholder" role="img">
						<path />
					</DvdComponent>
					<span id="dvdToggle">DVD MODE (Disabled)</span>
				</div>
			</li>
			<li class="trademark">
				<nuxt-link to="/#">Hardlait© <span class="hidden md:inline-block"> {{ date }}</span>
				</nuxt-link>
			</li>
		</ul>
	</footer>
</template>
  
<script>

export default {
	name: 'FooterDvdOff',
	data() {
		return {
			date: new Date().getFullYear(),
			hover: false,
		};
	},
}
</script>
  
<style lang="postcss" scoped>
footer {
	padding: 0.5rem;
	z-index: 20;

	& .footer-menu {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-items: flex-end;


		& li.trademark {
			grid-column: 5 / 6;
			justify-self: flex-end;
		}
	}
}



.dvd-placeholder {
	width: 50px;
	position: relative;
	bottom: -50px;
}

.hl-dvd-toggle {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: crosshair;
	z-index: 100;
	color: var(--text);

	& .info {
		display: none
	}
}



footer {
	& .footer-menu {
		& li {
			& a {
				color: var(--bg)
			}
		}

		& li.footer-link-3 {
			& .hl-dvd-toggle {
				color: var(--bg);

				& svg {
					fill: var(--bg);
				}
			}
		}
	}
}


@media only screen and (max-width: 768px) {
	footer {
		& .footer-menu {
			display: grid;
			grid-template-rows: repeat(3, 1rem);
			grid-template-columns: auto;
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

	}

	.dvd-placeholder {
		width: 50px;
		position: unset;
		height: 20px;
		bottom: unset;
	}
}
</style>
  