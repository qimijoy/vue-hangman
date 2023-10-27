<template>
	<div class="hangman">
		<HHeader />

		<main class="hangman__content">
			<section class="hangman__mistakes">
				<HHangmanPicture :mistakes="0" />

				<HMistakes v-show="wrongLetters.length" :mistakes="wrongLetters" />
			</section>
			<section class="hangman__word">
				<HWord :letters="correctLetters" :word="word" />
			</section>
		</main>

		<HPopup word="Тест" />

		<HNotification v-show="false" />
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
const word = ref('василий');
const letters = ref([]);

// COMPUTED
const correctLetters = computed(() => letters.value.filter((letter) => word.value.includes(letter)));
const wrongLetters = computed(() => letters.value.filter((letter) => !word.value.includes(letter)));

window.addEventListener('keydown', (event) => {
	const letter = event.key;

	if (letters.value.includes(letter)) {
		return;
	}

	if (ifCyrillic(letter)) {
		letters.value.push(letter.toLowerCase());
	}
});

const ifCyrillic = (letter) => {
	return /[а-яА-ЯёЁ]/.test(letter);
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

.hangman {
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 450px;
	padding: 20px 30px;
	margin: 0 auto;

	&__content {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}

	&__mistakes {
		display: flex;
		flex-direction: column;
		gap: 20px;

		@media @small {
			flex-direction: row;
		}
	}

	&__word {
		margin-top: 20px;
	}
}
</style>
