<template>
	<div class="popup-overlay">
		<div class="popup">
			<h2 v-if="status === 'win'" class="popup__win">Поздравляю, вы победили! 😃</h2>
			<div v-else class="popup__lose">
				<h2>Вы проиграли. 😕</h2>
				<h3>...имя: {{ word }}</h3>
			</div>
			<button type="button" class="popup__button" @click="emit('restart')">Сыграть еще раз</button>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
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
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);

	display: flex;
	align-items: center;
	justify-content: center;
}

.popup {
	background: #54bc6c;
	border-radius: 5px;
	box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
	padding: 20px;
	text-align: center;

	& h2,
	& h3 {
		color: #fff;
	}

	&__button {
		cursor: pointer;
		background-color: #fff;
		color: #54bc6c;
		border: 0;
		margin-top: 20px;
		padding: 12px 20px;
		font-size: 16px;

		&:active {
			transform: scale(0.98);
		}

		&:focus {
			outline: 0;
		}
	}
}
</style>
