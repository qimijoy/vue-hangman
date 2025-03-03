<template>
	<div class="word">
		<span v-for="(letter, index) in word" :key="index" class="word__letter">
			{{ letters.includes(letter) ? letter : '' }}
		</span>
	</div>
</template>

<script setup>
	defineProps({
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

			width: 20px;
			height: 50px;
			margin: 0 3px;

			font-size: 30px;
			align-items: center;
			justify-content: center;

			border-bottom: 3px solid #54bc6c;
		}
	}
</style>
