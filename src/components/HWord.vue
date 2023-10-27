<template>
	<div class="word">
		<span v-for="(letter, index) in word" :key="index" class="letter">
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
	},
});
</script>
