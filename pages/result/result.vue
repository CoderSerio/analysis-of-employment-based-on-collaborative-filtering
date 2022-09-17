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
				这是对于这个性格的一些解析和描述，阿巴阿巴阿巴
			</view>
		</view>
		<view class="result-item">
			推荐职业
		</view>
		<view class="occupations">
			<view class="occupation-item">
				<view class="occupation-name">
					职业1
				</view>
				<view class="occupation-description">
					简述阿巴阿巴
				</view>
			</view>
			<view class="occupation-item">
				<view class="occupation-name">
					职业2
				</view>
				<view class="occupation-description">
					也是简述阿巴阿巴阿巴，但是字超级超级多，就像是心脏和字节只能跳动一个，
					跳动跳动蹦蹦蹦直接到再也跳不动，也就是意味着人和公司之间有一个寄了
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup lang="ts">
	import { onMounted, ref, Ref, reactive, toRaw } from 'vue';
	import { useStore } from 'vuex';
	import { request } from '../../utils/request'
	import { Type } from '../../pages/questionnaire/types'
	
	const store = useStore();
	let isLoading: Ref = ref(true);
	let result = reactive({
		type: '',
		value: -999
	});
	const storeData = toRaw(store.state.questionnaireResult);
	const handleGetThreshold = async () => {
		isLoading.value = true;
		const threshold = await request.getThreshold();
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
		switch (result.type) {
			case 'R': 
				result.type = '现实型';
				break;
			case 'E': 
				result.type = '企业型';
				break;
			case 'S': 
				result.type = '社会型';
				break;
			case 'I':
				result.type = '科技型';
				break;
			case 'C':
				result.type = '综合型';
				break;
			case 'A':
				result.type = '艺术型';
				break;
		}
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
			--lineHeight: 200rpx;
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
