<template>
	<div class="popup-overlay">
		<div class="popup">
			<h2 v-if="status === 'win'" class="popup__win">Поздравляю, вы победили! 😃</h2>
			<div v-else class="popup__lose">
				<h2>Вы проиграли 😕</h2>
				<h3>Загаданное имя: {{ word }}</h3>
			</div>
			<button type="button" class="popup__button" @click="emit('restart')">Сыграть еще раз</button>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		status: {
			type: String,
			default: 'win',
			validator: (value) => ['win', 'lose'].includes(value),
		},
		word: {
			type: String,
			required: true,
		},
	});

	const emit = defineEmits({
		restart: () => true,
	});
</script>

<style lang="less" scoped>
	.popup-overlay {
		display: flex;

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background-color: rgb(0 0 0 / 0.3);
		align-items: center;
		justify-content: center;
	}

	.popup {
		padding: 20px;

		text-align: center;

		background: #54bc6c;
		border-radius: 5px;
		box-shadow: 0 15px 10px 3px rgb(0 0 0 / 0.1);

		&__button {
			margin-top: 20px;
			padding: 12px 20px;

			font-size: 16px;

			color: #54bc6c;
			background-color: #ffffff;
			border: 0;

			cursor: pointer;

			&:focus {
				outline: 0;
			}

			&:active {
				transform: scale(0.98);
			}
		}

		& h2,
		& h3 {
			margin-top: 10px;

			color: #ffffff;
		}
	}
</style>
