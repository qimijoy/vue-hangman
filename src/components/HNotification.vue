<template>
	<div class="notification" :class="{ notification_show: show }">
		<p class="notification__text">Вы уже вводили этот символ</p>
	</div>
</template>

<script setup>
	defineProps({
		show: {
			type: Boolean,
			default: false,
		},
	});
</script>

<style lang="less" scoped>
	.notification {
		position: fixed;
		bottom: -50px;

		padding: 15px 20px;

		background-color: rgb(0 0 0 / 0.3);
		border-radius: 10px 10px 0 0;

		transition: transform 0.3s ease-in-out;

		&_show {
			transform: translateY(-50px);
		}

		&__text {
			margin: 0;
		}
	}
</style>
