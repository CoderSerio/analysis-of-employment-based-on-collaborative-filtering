<template>
	<view class="main">
		<!-- <view class="logo-container">
			<image class="logo" src="/static/logo.png"></image>
		</view> -->
		<view class="text-area">
			<text class="title">职业分析规划测试</text>
			<fui-button @click="toQuestionnaire">开始测试</fui-button>
		</view>
		<view class="divided">
			<view class="text-area divided-text">更多测试</view>
			<view class="text-area divided-text">(由第三方提供)</view>
		</view>
		<view class="text-area">
			<text class="title">MBIT职业性格测试</text>
			<fui-button @click="toApeskTest">开始测试</fui-button>
		</view>
		<view class="footer">
			Copyright © 2022 LEC
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

<style lang="scss">
	.main {
		padding: 50rpx;
	}
	.logo-container {
		text-align: center;
		.logo {
			margin: 0 auto;
			width: 100%;
		}	
	}

	.text-area {
		text-align: center;
		font-size: 48px;
	}
	
	.title {
		font-size: 18px;
	}
	
	.divided {
		margin-top: 100rpx;
		padding-top: 10rpx;
		border-top: 1rpx solid #8f8f94;
		color: #8f8f94;
		.divided-text {
			font-size: 20px;
		}
		:nth-child(2) {
			font-size: 16px;
		}
	}
	
	.footer {
		font-size: 12px;
		color: #8f8f94;
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
	}
</style>
