<template>
	<div v-if="loading" id="preloader">
		<div v-for="(row, index) in rows" :key="index" class="row">
			<div v-for="(word, wordIndex) in row" :key="wordIndex" class="word" :style="wordStyle(wordIndex)"
				ref="words">{{ word }}</div>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'Preloader',
	data() {
		return {
			loading: true,
			words: new Array(500).fill(0).map((_, i) => ['-', 'NIKOLAS', 'ARDELEY', 'DIRECTOR', 'CGI'][i % 5]),
		};
	},
	computed: {
		rows() {
			const screenWidth = window.innerWidth;
			const wordsPerRow = Math.ceil(screenWidth / 5); // assume each word is 20px wide
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
		}, 100);
	},
	methods: {
		animateWords() {
			const words = this.$refs.words;
			let index = 0;

			const animate = () => {
				const word = words[index];
				// add a check to ensure that `word` is not undefined
				if (word) {
					// calculate x and y coordinates based on the current index
					let x = Math.floor(Math.random() * window.innerWidth);
					let y = Math.floor(Math.random() * window.innerHeight);
					// wrap x and y around the screen dimensions
					x %= window.innerWidth;
					y %= window.innerHeight;
					word.style.opacity = 1;
					word.style.transform = `translate(${x}px, ${y}px)`;
				}

				index += 1;
				if (index < words.length) {
					setTimeout(animate, 10);
				} else {
					this.loading = false;
				}
			};

			animate();
		},
		wordStyle(wordIndex) {
			return {
				fontSize: '16px',
				position: 'absolute',
				top: 0,
				left: 0,
				opacity: 0,
				transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
			};
		},
	},
};
</script>
  
<style>
#preloader {
	overflow: hidden;
	background-color: var(--bg);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
</style>