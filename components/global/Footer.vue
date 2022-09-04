
<template>
	<footer class="w-full h-16 fixed left-0 bottom-0 flex justify-center items-center text-white text-2xl">
		<ul class="footer-menu">
			<li>
				<nuxt-link class="btn block uppercase" to="/projects">Projects</nuxt-link>
			</li>
			<li>
				<nuxt-link class="btn block uppercase" to="/#">Dump</nuxt-link>
			</li>
			<li>
				<nuxt-link class="btn block uppercase" to="/#">About</nuxt-link>
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
  	display: flex;
  	justify-content: flex-center;
  
  	& .footer-menu {
  		width: 100%;
  		display: flex;
  		justify-content: space-between;
  		align-items: flex-start;
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
  