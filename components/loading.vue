<template>
	<div v-if="loading" id="preloader">
		<div v-for="(row, index) in rows" :key="index" class="row">
			<div v-for="(word, wordIndex) in row" :key="wordIndex" class="word">{{ word }}</div>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'Preloader',
	data() {
		return {
			loading: true,
			words: new Array(5000).fill(0).map((_, i) => ['-', 'NIKOLAS', 'ARDELEY', 'DIRECTOR', 'CGI'][i % 5]),
		};
	},
	computed: {
		rows() {
			const screenWidth = window.innerWidth;
			const wordsPerRow = Math.ceil(screenWidth / 20); // assume each word is 20px wide
			const rows = [];
			let row = [];

			for (let i = 0; i < this.words.length; i += 1) {
				row.push(this.words[i]);
				if (row.length === wordsPerRow || i === this.words.length - 1) {
					rows.push(row);
					row = [];
				}
			}

			return rows;
		},
	},
	mounted() {
		this.animateWords();
		setTimeout(() => {
			this.loading = false;
		}, 5000); // set the animation to end after 3 seconds
	},
	methods: {
		animateWords() {
			if (this.$el) {
				const words = this.$el.querySelectorAll('.word');
				let index = 0;

				const animate = () => {
					const word = words[index];
					// get random values for x and y coordinates
					const x = Math.floor(Math.random() * window.innerWidth);
					const y = Math.floor(Math.random() * window.innerHeight);
					word.style.opacity = 1;
					word.style.transform = `translate(${x}px, ${y}px)`;

					index += 1;
					if (index < words.length) {
						setTimeout(animate, 0);
					} else {
						this.loading = false;
					}
				};

				animate();
			}
		},
	},
};
</script>

<style>
#preloader {
	position: absolute;
	background-color: var(--bg);
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	z-index: 100;
}

.word {
	opacity: 0;
	transform: translateX(-50px);
	transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
</style>