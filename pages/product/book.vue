<script setup>
	import { useMediaQuery } from '@vueuse/core';

	import productItemData from '~~/composables/productItemData';

	const isMobileeScreen = useMediaQuery('(max-width: 768px)');
	const mobile = computed(() => ref(isMobileeScreen.value));
</script>

<template>
	<div class="card" v-if="!mobile.value">
		<ProductCardTop badje="book" badjeText="Бронь" />
		<div class="card__content">
			<div class="card__left">
				<ProductBookFirst />
				<ProductBookSecond />
			</div>
			<div class="card__right">
				<ProductCardSwiper :premium="true" />
			</div>
		</div>
		<div class="card-desc">
			<div class="card-desc__left">
				<ProductBookThird />
			</div>
			<div class="card-desc__right">
				<!-- map -->
			</div>
		</div>
		<div class="card-bottom-btn">
			<div class="card-bottom-btn__left">
				<button class="btn btn-green">Позвонить</button>
				<button class="btn btn-green">Написать</button>
			</div>
			<div class="card-bottom-btn__right">
				<button class="btn btn-white">Построить маршрут</button>
				<button class="btn btn-white">Вызвать такси</button>
			</div>
		</div>
	</div>
	<ProductBookPrice class="card-under" />
	<ProductBookSales class="card-under" />
	<ProductBookDetail class="card-under" />
	<ProductBookItems
		class="card-hall"
		title="Залы"
		:items="productItemData.halls"
	/>
	<ProductBookItems
		class="card-service"
		title="Услуги"
		:items="productItemData.services"
	/>
	<ProductBookItems
		class="card-bath"
		title="Банные принадлежности"
		:items="productItemData.bath"
	/>
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss">
	.card-hall {
		z-index: 5;
	}
	.card-service {
		z-index: 4;
	}
	.card-bath {
		z-index: 3;
	}

	.card-desc {
		padding-top: 3.5em;
		display: flex;
		gap: 1rem;
		&__left {
			width: 100%;
			max-width: 54rem;
		}

		&__right {
			width: 100%;
		}
	}
</style>
