<template>
	<view class="main">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">就业推荐问卷调查</text>
		</view>
		<fui-button width="150rpx" @click="toQuestionnaire">开始测试</fui-button>
	</view>
</template>

<script setup lang="ts">
	const toQuestionnaire = () => {
		uni.navigateTo({
			url: '/pages/questionnaire/questionnaire'
		})
	}
	
</script>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 20rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
