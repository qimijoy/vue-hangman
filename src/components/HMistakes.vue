<template>
	<div class="mistakes">
		<h3 class="mistakes__header">Ошибки</h3>
		<div v-show="mistakes.length" class="mistakes__letter">
			<span v-for="(letter, index) in mistakes" :key="letter" class="mistakes__lette">
				{{ index === mistakes.length - 1 ? letter : `${letter},&nbsp;` }}
			</span>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		mistakes: {
			type: Array,
			required: true,
			validator: (mistakes) => mistakes.every((letter) => typeof letter === 'string'),
		},
	});
</script>

<style scoped lang="less">
	.mistakes {
		display: flex;
		flex-direction: column;

		max-width: 200px;

		&__header {
			margin: 0 0 5px;
		}

		&__letter {
			display: inline-flex;
			flex-direction: row;
			flex-wrap: wrap;

			font-size: 24px;
		}
	}
</style>
