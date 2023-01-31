<script setup></script>

<template>
	<div class="user-action">
		<img class="user-action__item" src="~/assets/img/icon/like.svg" alt="" />

		<img class="user-action__item" src="~/assets/img/icon/dislike.svg" alt="" />

		<img class="user-action__item" src="~/assets/img/icon/msg.svg" alt="" />

		<img class="user-action__item" src="~/assets/img/icon/share.svg" alt="" />
	</div>
</template>

<style lang="scss" scoped>
	
	.user-action {
		display: flex;
		align-items: center;
		background-color: $default-color;
		border-radius: 28px;

		padding: 8px;
		&__item {
			padding: 0 7px;
			border-right: 1.25px solid #e1e5f2;
			&:last-child {
				border: none;
			}
		}
	}
</style>
