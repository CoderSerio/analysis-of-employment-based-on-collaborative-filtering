<template>
	<view class="result">
		<view class="questionnaire-title">测试结果</view>
		<view class="result-item">
			性格类型
		</view>
		<view class="character">
			<view class="character-name">
				{{result.type}}
			</view>
			<view class="character-description">
				<view v-for="desc in result.description">
					{{desc}}
				</view>
			</view>
		</view>
		<view class="result-item">
			推荐职业
		</view>
		<view class="occupations">
			<view class="occupation-item" v-for="one in threshold.result.data">
				<view class="occupation-name">
					{{one.name}}
				</view>
				<view class="occupation-description">
					{{one.description}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup lang="ts">
	import { onMounted, ref, Ref, reactive, toRaw } from 'vue';
	import { useStore } from 'vuex';
	import { request } from '../../utils/request';
	import { Type } from '../../pages/questionnaire/types';
	import { translateToCN, resultDescription } from './resultData';
	const store = useStore();
	let isLoading: Ref = ref(true);
	let threshold = reactive({
		result: {
			data: []
		}
	})
	let result = reactive({
		type: '',
		value: -999,
		description: ''
	});
	const storeData = toRaw(store.state.questionnaireResult);
	const handleGetThreshold = async () => {
		isLoading.value = true;
		threshold = await request.getThreshold();
		threshold.result.data = threshold.result.data.filter((one) => {
			return (storeData.R >= one.threshold.R &&
				storeData.E >= one.threshold.E &&
				storeData.S >= one.threshold.S &&
				storeData.I >= one.threshold.I &&
				storeData.C >= one.threshold.C &&
				storeData.A >= one.threshold.A)
		})
		if (!threshold.result.data.length) {
			threshold.result.data.push({
				name: '其他职业', 
				description: '是非常特殊的性格',
			})
		}
		// 选出数值最高的类型
		Object.keys(storeData).forEach((key) =>{
			if (!result.type) {
				result.value = storeData[key];
				result.type = key;
			} else {
				if (storeData[key] > result.value) {
					result.value = storeData[key];
					result.type = key;
				}
			}
		})
		// 下面这两行顺序不能交换
		result.description = resultDescription[result.type];
		result.type = translateToCN[result.type];
		
		console.log('threshold', threshold)
		isLoading.value = false;
	}
	onMounted(() => {
		handleGetThreshold();
	})
</script>

<style lang="scss">
	.result {
		// padding: 0 50rpx;
		.questionnaire-title {
			font-size: 24px;
			padding: 15rpx 0;
			font-weight: 700;
			color: #fff;
			background-color: #00B98D;
			// background-color: var(--fui-color-primary, #465CFF);
			text-align: center;
			
		}
		
		.result-item {
			margin: 20rpx 15rpx;
			padding: 5rpx;
			border-bottom: 1px solid #333e;
		}
		
		.character {
			--lineHeight: 260rpx;
			--leftWidth: 180rpx;
			font-size: 18px;
			height: var(--lineHeight);
			.character-name {
				display: inline-block;
				vertical-align: middle;
				width: var(--leftWidth);
				font-weight: 900;
				text-align: center;
				line-height: var(--lineHeight);
			}
			.character-description {
				width: calc(750rpx - var(--leftWidth) - 10rpx);
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
			}
		}
		.occupations {
			margin: 20rpx 15rpx;
			padding: 5rpx;
			.occupation-item {
				border-left: 16rpx solid #00B98D;
				padding-left: 5rpx;
				min-height: 120rpx;
				max-height: 210rpx;
				overflow-y: hidden;
				margin: 0 0 20rpx 0;
				.occupation-name {
					font-size: 20px;
					font-weight: 800;
				}
			}
		}
	}
	
</style>
