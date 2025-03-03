<template>
	<div class="hangman">
		<HHeader />

		<main class="hangman__content">
			<section class="hangman__mistakes">
				<HHangmanPicture :mistakes="wrongLetters.length" />

				<HMistakes :mistakes="wrongLetters" />
			</section>
			<section class="hangman__word">
				<HWord :letters="correctLetters" :word="word" />
			</section>

			<section class="keyboard">
				<Keyboard layouts="йцукенгшщзхъ|фывапролджэ|ячсмитьбю" @input="keyboardHandler" />
			</section>
		</main>

		<HNotification :show="showNotification" />

		<HPopup v-show="showPopup" :word="word" :status="popupStatus" @restart="onRestartHandler" />
	</div>
</template>

<script setup>
	import { ref, computed, watch, onMounted } from 'vue';

	import HHeader from '@/components/HHeader.vue';
	import HHangmanPicture from '@/components/HHangmanPicture.vue';
	import HMistakes from '@/components/HMistakes.vue';
	import HWord from '@/components/HWord.vue';
	import HPopup from '@/components/HPopup.vue';
	import HNotification from '@/components/HNotification.vue';

	import Keyboard from 'vue-keyboard';

	import { getRandomName } from '@/api/getRandomName';

	// STATES
	const word = ref('');
	const letters = ref([]);
	const showNotification = ref(false);
	const showPopup = ref(false);
	const popupStatus = ref('win');

	// COMPUTED
	const correctLetters = computed(() => letters.value.filter((letter) => word.value.includes(letter)));
	const wrongLetters = computed(() => letters.value.filter((letter) => !word.value.includes(letter)));

	// WATCHERS
	watch(wrongLetters, () => {
		if (wrongLetters.value.length > 6) {
			popupStatus.value = 'lose';
			showPopup.value = true;
		}
	});

	watch(correctLetters, () => {
		if (word.value.split('').every((letter) => correctLetters.value.includes(letter))) {
			popupStatus.value = 'win';
			showPopup.value = true;
		}
	});

	onMounted(async () => {
		word.value = await getRandomName();
	});

	// FUNCTIONS
	const onRestartHandler = async () => {
		word.value = await getRandomName();

		showPopup.value = false;
		popupStatus.value = 'lose';
		letters.value = [];
	};

	window.addEventListener('keydown', (event) => {
		inputLogic(event.key);
	});

	const keyboardHandler = (value) => {
		inputLogic(value);
	};

	const inputLogic = (letter) => {
		if (showPopup.value) {
			return;
		}

		if (letters.value.includes(letter)) {
			showNotification.value = true;
			setTimeout(() => (showNotification.value = false), 2000);
		} else {
			showNotification.value = false;

			if (ifCyrillic(letter)) {
				letters.value.push(letter.toLowerCase());
			}
		}
	};

	const ifCyrillic = (letter) => {
		return /[а-яА-ЯёЁ]/.test(letter);
	};
</script>

<style lang="less" scoped>
	@import '@/assets/styles/_breakpoints';

	.hangman {
		display: flex;
		flex-direction: column;

		max-width: 450px;
		margin: 0 auto;
		padding: 10px;
		align-items: center;

		&__content {
			display: flex;
			flex-direction: column;

			margin-top: 20px;
		}

		&__mistakes {
			display: flex;
			flex-direction: column;

			@media @small {
				flex-direction: row;
			}
		}

		&__word {
			display: flex;

			margin-top: 20px;
			justify-content: center;
		}
	}
</style>

<style lang="less">
	.keyboard {
		margin-top: 20px;
	}

	.vue-keyboard-row {
		padding-bottom: 5px;
	}

	.vue-keyboard-key {
		min-width: 20px;
		margin: 3px;
		padding: 6px;
	}
</style>
