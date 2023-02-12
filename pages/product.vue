<script setup>
	import { useMediaQuery } from '@vueuse/core';

	const isLargeScreen = useMediaQuery('(min-width: 1000px)');
	const mobile = computed(() => ref(isLargeScreen));

	const breadcrumbs = ref([
		'Главная',
		'Бани в городе Москва',
		'Аминьевские бани',
	]);
</script>

<template>
	<div class="product-card">
		<div class="product-container container">
			<!-- header -->
			<div class="sub-header" v-if="mobile.value">
				<UIBreadcrumbs :items="breadcrumbs" />
				<UserAction />
			</div>
			<NuxtPage />
		</div>
	</div>
</template>

<style lang="scss">
	ul,
	ol {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	.product-card {
		width: 100%;
	}
	.sub-header {
		display: flex;
		justify-content: space-between;
		margin: 1.6rem 0;
	}

	.product-container {
		@media screen and (max-width: 1000px) {
			width: auto;
		}
	}
</style>
