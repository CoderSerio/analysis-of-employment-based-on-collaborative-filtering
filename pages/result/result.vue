<template>
	<view class="questionnaire-title">测试结果</view>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { request } from '../../utils/request'
	let isLoading = ref(true);
	const handleGetThreshold = async () => {
		const res = await request.getThreshold();
		console.log('查询的结果', res);
	}
	onMounted(() => {
		handleGetThreshold();
	})
</script>

<style lang="scss">
	.questionnaire-title {
		font-size: 24px;
		font-weight: 900;
		text-align: center;
	}
</style>
