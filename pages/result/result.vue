<template>
	<view class="result">
		<view class="questionnaire-title">测试结果</view>
		<view class="character">
			<view class="left">
				性格:
			</view>
			<view class="right">
				{{result}}
			</view>
		</view>
		<view class="occupation">
			<view class="left">
				推荐职业:
			</view>
			<view class="right">
				
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
		const res = await request.getThreshold();
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
		isLoading.value = false;
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
