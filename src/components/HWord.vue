<template>
	<div class="word">
		<span v-for="(letter, index) in word" :key="index" class="word__letter">
			{{ letters.includes(letter) ? letter : '' }}
		</span>
	</div>
</template>

<script setup>
const props = defineProps({
	word: {
		type: String,
		required: true,
	},
	letters: {
		type: Array,
		required: true,
		validator: (letters) => letters.every((letter) => typeof letter === 'string'),
	},
});
</script>

<style lang="less" scoped>
.word {
	display: flex;
	flex-direction: row;

	&__letter {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: 20px;
		height: 50px;

		font-size: 30px;

		border-bottom: 3px solid #54bc6c;
		margin: 0 3px;
	}
}
</style>
