<script setup></script>

<template>
	<div class="card">
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

<style lang="scss">
	.no-box {
		box-shadow: none !important;
	}
	.card {
		&__content {
			display: flex;
			gap: 3.3rem;
		}

		&__left {
			max-width: 52rem;
		}

		&__right {
			width: 100%;
		}
	}
</style>
