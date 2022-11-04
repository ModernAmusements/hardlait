<template>
	<nuxt-link class="show-more" :to="`/${postType}/${post.slug}`">
		<p :style="{ color: `${post.color}` }" class="mt-0">
			<label class="hl-show-more-label" :class="{ red: isRed }" @click="toggleRed">
				<span class="hl-show-more-dash hl-show-more-dash-bottom">
					<span class="hl-show-more-dash-span hl-show-more-dash-span-bottom"></span>
				</span>
			</label>
			More
		</p>
	</nuxt-link>
</template>

<script>
export default {
	name: 'ShowMore',
}
</script>

<style lang="postcss" scoped>
.hl-show-more-label {
	display: block;
	position: absolute;
	z-index: 3;
	top: -13px;
	left: 48px;
	height: 48px;
	cursor: pointer;
	transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.hl-show-more-dash {
	position: absolute;
	z-index: 3;
	top: 14px;
	left: 0px;
	width: 30px;
	height: 30px;
	transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}


.hl-show-more-dash-span {
	display: block;
	width: 17px;
	height: 1px;
	background: #fff;
	border-radius: 0.5px;
	position: absolute;
	left: 7px;
	z-index: 1;
	top: 48px;
}

.hl-show-more-dash-span-bottom {
	bottom: 14px;
	top: 7px;
	left: 5px;
	height: 2px;
	transform: translateY(3px) scaleX(.88235);
	transition: transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s;
}

.hl-show-more-label.red {
	& .hl-show-more-dash-span-bottom {
		transform: rotate(90deg);
		top: 9px;
	}
}
</style>