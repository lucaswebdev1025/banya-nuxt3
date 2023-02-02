<script setup></script>

<template>
	<div class="card">
		<ProductCardTop badje="book" badjeText="Бронь" />
		<div class="card__content">
			<div class="card__left">
				<ProductCardLeftFirst />
			</div>
			<div class="card__right">
				<ProductCardSwiper />
			</div>
		</div>
	</div>
	<ProductCardService class="no-box" />
	<ProductCardReview class="no-box" />
	<ProductCardRelated class="no-box" />
</template>

<style lang="scss" scoped></style>
