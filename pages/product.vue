<script setup></script>

<template>
	<div class="product-card">
		<!-- header -->
		<div class="sub-header">
			<TheBreadcrumbs />
			<TheUserAction />
		</div>
		<ProductCardMain />
	</div>
</template>

<style lang="scss" scoped>
	ul,
	ol {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.product-card {
		width: 100%;
	}
	.sub-header {
		display: flex;
		justify-content: space-between;
	}
</style>
