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
			words: new Array(1000).fill(0).map((_, i) => ['-', 'NIKOLAS', 'ARDELEY', 'DIRECTOR', 'CGI'][i % 5]),
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
		}, 5000);
	},
	methods: {
		animateWords() {
			const words = this.$refs.words;
			let index = 0;
			let prevX = window.innerWidth / 2;
			let prevY = window.innerHeight / 2;

			const animate = () => {
				const word = words[index];
				// add a check to ensure that `word` is not undefined
				if (word) {
					// calculate x and y offsets based on the current index
					const offsetX = Math.floor(Math.random() * 500) - 25;
					const offsetY = Math.floor(Math.random() * 500) - 25;
					// calculate the new x and y coordinates based on the previous position and the offsets
					let x = prevX + offsetX;
					let y = prevY + offsetY;
					// wrap x and y around the screen dimensions
					x %= window.innerWidth;
					y %= window.innerHeight;
					prevX = x;
					prevY = y;
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