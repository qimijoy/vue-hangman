<template>
	<div class="wrong-letters-container">
		<div class="wrong-letters">
			<p>Ошибки</p>
			<span v-for="(letter, index) in mistakes" :key="letter">
				{{ index === mistakes.length - 1 ? letter : `${letter}, ` }}
			</span>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	mistakes: {
		type: Array,
		required: true,
	},
});
</script>

<style scoped lang="less"></style>
