<template>
	<view class="questionnaire-title">测试结果</view>
</template>

<script setup lang="ts">
	import { onMounted, ref, Ref } from 'vue';
	import { request } from '../../utils/request'
	let isLoading: Ref = ref(true);
	const handleGetThreshold = async () => {
		isLoading.value = true;
		const res = await request.getThreshold();
		isLoading.value = false;
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
