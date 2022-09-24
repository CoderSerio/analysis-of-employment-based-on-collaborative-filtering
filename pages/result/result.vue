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
		<view class="occupations" style="margin: ;">
			<view class="occupation-item" v-for="one in threshold.result.data">
				<view class="occupation-name">
					{{one.name}}
				</view>
				<view class="occupation-description">
					{{one.description}}
				</view>
			</view>
		</view>
		<view class="result-item" style="margin-top: 0px;" v-show="noCheck">
			对结果感到如何？
		</view>
		<view class="callback" v-if="noCheck">
			<fui-button background="#00B98D" color="#fff"  @click="satisfied">很符合</fui-button>
			<fui-button background="#00B98D" color="#fff"  @click="dissatisfied">不太符合</fui-button>
		</view>
		<view class="result-item" style="margin-top: 0px;" v-show="showDissatisfiedBtns">
			下面哪个选项最能体现您与结果的差异？
		</view>
		<view class="callback-item" v-if="showDissatisfiedBtns" v-for="(answer, index) in list" :key="answer.id">
			<fui-button background="#00B98D" color="#fff" v-if="showDissatisfiedBtns" @click="updateData(answer.id)" >{{answer.text}}</fui-button>
		</view>
		<fui-loading type="col" :isFixed="true" v-show="isLoading"></fui-loading>
	</view>
</template>

<script setup lang="ts">
	import { onMounted, ref, Ref, reactive, toRaw} from 'vue';
	import { useStore } from 'vuex';
	import { request } from '../../utils/request';
	import { Type } from '../../pages/questionnaire/types';
	import { translateToCN, resultDescription,list,idList } from './resultData';
	const store = useStore();
	let isLoading: Ref = ref(true);
	let noCheck: Ref = ref(true);
	let showDissatisfiedBtns: Ref = ref(false);
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
	
	const showToast = (str = '感谢您的使用!')=>{
		uni.showToast({
			title: str,
			duration:2000
		})
	}
	
	const storeData = toRaw(store.state.questionnaireResult);
	const satisfied = ()=>{
		showToast();
		noCheck.value = false;
		if (threshold.result.data.length) {
			threshold.result.data.forEach((res)=>{
				let index = Math.floor(Math.random()*6);
				let id = idList[index];
				let res1 = Object.assign({}, res);
				res1.threshold[id] ++;
				request.setThreshold(res.name, res1.threshold)
			});
		}
	};
	const dissatisfied = ()=>{
		noCheck.value = false;
		showDissatisfiedBtns.value = true;
	};
	const updateData = (id)=>{
		showDissatisfiedBtns.value = false;
		showToast('感谢您的反馈!');
		if (threshold.result.data.length ) {
			threshold.result.data.forEach((res)=>{
				let res1=Object.assign({},res);
				res1.threshold[id]--;
				request.setThreshold(res.name,res1.threshold)
			})
		}
	}
	
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
			margin: 10rpx 15rpx 0rpx 15rpx;
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
		
		.callback{
			height: 50rpx;
			width: 100vw;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			fui-button{
				height: 50rpx;
				width: 150rpx;
			}
		}
		.callback-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			fui-button{
				height: 100rpx;
				width: 90vw;
				margin-bottom: 30rpx;
			}
		}
		
	}
	
</style>
