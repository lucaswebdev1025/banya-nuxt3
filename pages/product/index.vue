<script setup>
	import { useMediaQuery } from '@vueuse/core';
	const isMobileeScreen = useMediaQuery('(max-width: 768px)');
	const mobile = computed(() => ref(isMobileeScreen.value));
</script>

<template>
	<div class="card" v-if="!mobile.value">
		<ProductCardTop />
		<div class="card__content">
			<div class="card__left">
				<ProductCardLeftFirst />
			</div>
			<div class="card__right">
				<ProductCardSwiper />
			</div>
		</div>
	</div>
	<ProductCardBlocked class="no-box" v-if="true" />
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss"></style>
