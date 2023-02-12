<script setup>
	import { useMediaQuery } from '@vueuse/core';

	const isMobileeScreen = useMediaQuery('(min-width: 768px)');
	const mobile = computed(() => ref(isMobileeScreen.value));
</script>

<template>
	<div class="wrapper">
		<TheHeader v-if="mobile.value" />
		<div class="wrapper-content">
			<slot />
		</div>
		<TheFooter />
	</div>
</template>

<style scoped lang="scss">
	.wrapper-content {
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}
</style>
