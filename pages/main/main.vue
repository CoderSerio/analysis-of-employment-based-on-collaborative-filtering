<template>
	<view class="main">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">就业推荐分析测试</text>
			<fui-button @click="toQuestionnaire">开始测试</fui-button>
		</view>
		<view class="text-area">
			<text class="title">MBIT职业性格测试</text>
			<fui-button @click="toApeskTest">开始测试</fui-button>
		</view>
	</view>
</template>

<script setup lang="ts">
	const toQuestionnaire = () => {
		uni.navigateTo({
			url: '/pages/questionnaire/questionnaire'
		})
	}
	const toApeskTest = () => {
		uni.navigateTo({
			url: '/pages/apesk/apesk' 
		})
	}
</script>

<style>
	.main {
		/* 	display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	 */	
		padding: 50rpx;
	}
	
	
/* 
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
 */
	.text-area {
		text-align: center;
		font-size: 48px;
	}
	
	.title {
		font-size: 18px;
		color: #8f8f94;
	}
	
</style>
