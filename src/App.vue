<template>
	<div class="hangman">
		<HHeader />

		<main class="hangman__content">
			<HHangmanPicture :mistakes="0" />
			<HMistakes v-if="false" :mistakes="[]" />
			<HWord :letters="correctLetters" :word="word" />
		</main>

		<HPopup word="Тест" />

		<HNotification />
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

import HHeader from '@/components/HHeader.vue';
import HHangmanPicture from '@/components/HHangmanPicture.vue';
import HMistakes from '@/components/HMistakes.vue';
import HWord from '@/components/HWord.vue';
import HPopup from '@/components/HPopup.vue';
import HNotification from '@/components/HNotification.vue';

// STATES
const word = ref('Василий');
const letters = ref([]);

// COMPUTED
const correctLetters = computed(() => letters.value.filter((letter) => word.value.includes(letter)));

window.addEventListener('keydown', (event) => {
	const letter = event.key;

	if (ifCyrillic(letter)) {
		letters.value.push(letter.toLowerCase());
	}
});

const ifCyrillic = (letter) => {
	return /[а-яА-ЯёЁ]/.test(letter);
};
</script>

<style lang="less" scoped>
.hangman {
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 450px;
	padding: 20px 30px;
	margin: 0 auto;

	&__content {
		position: relative;
		height: 350px;
		padding: 20px 0;
		margin: auto;
	}
}
</style>
