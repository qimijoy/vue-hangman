<template>
	<div class="hangman">
		<HHeader />
	</div>
</template>

<script setup>
import HHeader from '@/components/HHeader.vue';
</script>

<style lang="less" scoped>
.hangman {
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 450px;
	padding: 20px 30px;
	margin: 0 auto;
}
</style>
