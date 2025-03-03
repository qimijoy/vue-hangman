<template>
	<svg height="250" width="200" class="hangman-picture">
		<!-- Gallows -->
		<line x1="60" y1="20" x2="140" y2="20" />
		<line x1="140" y1="20" x2="140" y2="50" />
		<line x1="60" y1="20" x2="60" y2="230" />
		<line x1="20" y1="230" x2="100" y2="230" />

		<!-- Head -->
		<circle v-if="mistakes >= 1" cx="140" cy="70" r="20" />
		<!-- Body -->
		<line v-if="mistakes >= 2" x1="140" y1="90" x2="140" y2="150" />
		<!-- Arms -->
		<line v-if="mistakes >= 3" x1="140" y1="120" x2="120" y2="100" />
		<line v-if="mistakes >= 4" x1="140" y1="120" x2="160" y2="100" />
		<!-- Legs -->
		<line v-if="mistakes >= 5" x1="140" y1="150" x2="120" y2="180" />
		<line v-if="mistakes >= 6" x1="140" y1="150" x2="160" y2="180" />
	</svg>
</template>

<script setup>
	defineProps({
		mistakes: {
			type: Number,
			required: true,
		},
	});
</script>

<style scoped lang="less">
	@import '@/assets/styles/_breakpoints';

	.hangman-picture {
		margin-right: 0;

		fill: transparent;
		stroke: #3a3a3a;
		stroke-width: 4px;
		stroke-linecap: round;

		@media @small {
			margin-right: 32px;
		}
	}
</style>
