<template>
	<div class="hangman">
		<HHeader />

		<main class="hangman__content">
			<HHangmanPicture mistakes="0" />
		</main>
	</div>
</template>

<script setup>
import HHeader from '@/components/HHeader.vue';
import HHangmanPicture from '@/components/HHangmanPicture.vue';
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
