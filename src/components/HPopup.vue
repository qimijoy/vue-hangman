<template>
	<div v-show="isVisible" class="popup-container">
		<div class="popup">
			<h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
			<template v-else>
				<h2>Вы проиграли. 😕</h2>
				<h3>...имя: {{ word }}</h3>
			</template>
			<button type="button" @click="emit('restart')">Сыграть еще раз</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	word: {
		type: String,
		required: true,
	},
});

const emit = defineEmits({
	restart: () => true,
});

const gameStatus = ref('');
const isVisible = ref(false);

const open = (status) => {
	gameStatus.value = status;
	isVisible.value = true;
};
const close = () => {
	isVisible.value = false;
};

defineExpose({
	open,
	close,
});
</script>

<style scoped lang="less"></style>
