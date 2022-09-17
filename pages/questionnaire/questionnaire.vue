<template>
	<view class="questionnaire">
		<view class="questionnaire-title">就业推荐问卷调查</view>
		<view class="progress-box">
			<text>问题进度</text>
			<!-- 可能会加进度条，但这鬼ui还要vip，秀 -->
			<!-- TODO: 手写一个进度条 -->
			<view class="progress"></view>
		</view>
		<view class="menu-box">
			<view class="menu-button" @click="showMenu = true">
				<fui-icon name="menu"></fui-icon>
			</view>
			<button 
				class="submit-button" 
				hover-class="submit-button-hover" 
				@click="submitData"
			>
				提交	
			</button>
		</view>
		<view class="question">
			<view class="title">
				<text>{{currentQuestion.title}}</text>
			</view>
		</view>
		<view class="answers">
			<fui-radio-group @change="answerCheck" v-model="checkedAnswer">
				<fui-label v-for="(answer, index) in answers" :key="index">
					<view class="answer">
						<view class="block"></view>
						<text>{{answer}}</text>
						<fui-radio :value="index+1" scaleRatio="1.2"></fui-radio>
					</view>
				</fui-label>
			</fui-radio-group>
		</view>
		<view class="pagination">
			<fui-pagination 
				:total="10*questionnaire.length" 
				size="32" 
				prevText="上一题" 
				nextText="下一题"
				:current="currentPage" 
				color="white" 
				background="rgb(0, 185, 141)"  
				@change="changePage" 
			/>
		</view>
		<fui-bottom-popup :show="showMenu" @close="showMenu = false">
			<scroll-view class="menu" scroll-y="true" enable-flex="true">
				<view class="unit" v-for="num in questionnaire.length" :key="num">
					<button 
						@click="flyPage(num)"
						hover-class="question-button-hover" 
						:class="'question-button ' + (questionnaire[num - 1].value ? 'question-button-active' : 'question-button-normal')"
					>
						{{num}}
					</button>
				</view>
			</scroll-view>
		</fui-bottom-popup>
		<fui-toast ref="submit">
			<view v-if="submitCheck">
				<fui-icon name="checkbox" color="#fff"></fui-icon>
				<text style="color: #fff">提交成功</text>
			</view>
			<view v-else class="fail-message">
				<fui-icon  name="clear" color="#fff"></fui-icon>
				<text style="color: #fff">请先完成所有题目</text>
			</view>
		</fui-toast>
	</view>
</template>

<script setup lang="ts">
	import { useStore } from 'vuex';
	import { ref, Ref, reactive, toRaw } from 'vue';
	import {
		questions, 
		intQuestionnaireResult
	} from './questionsData'
	import {
		Question,
		Page,
		AnswerCheckEvent,
		Type, 
		Answer,
		TotalScore
	} from './types'
	
	const store = useStore();
	const questionnaire: Array<Question> = reactive(questions);
	let currentQuestion: Ref = ref(questionnaire[0])
	let currentPage: number = 1
	let checkedAnswer: Ref = ref(null)
	let showMenu: Ref = ref(false)
	let submit: Ref = ref(null) // submit按钮dom
	let submitCheck: Ref = ref(false)
	const answers: Array<string> = [
		'非常符合我的情况', 
		'比较符合我的情况', 
		'不太符合我的情况', 
		'非常不符合我的情况'
	]
		
	const answerCheck = (event: AnswerCheckEvent):void => {
		questionnaire[currentQuestion.value.id - 1].value = Number(event.detail.value)		
		console.log(questionnaire)
	}
	const changePage = (page: Page) => {
		currentPage = page.current
		currentQuestion.value = questionnaire[currentPage-1]
		checkedAnswer.value = questionnaire[currentPage-1].value
	}
	const flyPage = (page: number) => {
		currentPage = page
		currentQuestion.value = questionnaire[currentPage-1]
		checkedAnswer.value = questionnaire[currentPage-1].value
		showMenu.value = false
	}
	const submitData = () => {
		let isOK = !questionnaire.some((one) => {
			return one.value === Answer.NoChoice;
		})
		submitCheck.value = isOK;
		submit.value.show({});
		if(isOK) {
			// 统计
			let questionnaireResult: TotalScore = Object.assign({}, intQuestionnaireResult);
			questionnaire.forEach((oneQuestion) => {
				let weight = oneQuestion.value;
				console.log(weight);
				oneQuestion.type.forEach((oneType) => {
					switch(oneQuestion.value) {
						case Answer.VeryMatched:
							questionnaireResult[oneType] += 2;
							break;
						case Answer.Matched:
							questionnaireResult[oneType] += 1;
							break;
						case Answer.Mismatched:
							questionnaireResult[oneType] -= 1;
							break;
						case Answer.VeryMismatched:
							questionnaireResult[oneType] -= 2;
							break;
						default:
							break;
					}
					
				})
			})
			console.log('结果', questionnaireResult);
			uni.navigateTo({url: '/pages/result/result'});
			store.commit('setQuestionnaireResult', questionnaireResult);
			console.log('全局状态管理', store.getters.questionnaireResult, toRaw(store.state.questionnaireResult), store.state.questionnaireResult.value)
		} else {
			// TODO: 得给个提示啥的...
			// console.log('提交失败！')
		}
	}
	const showMessage = () => {
		
	}
	
</script>

<style scoped>
	.question {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.questionnaire-title {
		font-size: 24px;
		font-weight: 900;
		text-align: center;
	}
	.progress-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		margin: 10rpx 0;
	}
	.progress {
		height: 10rpx;
		margin: 5rpx 0;
		background-color: blue;
	}
	.title {
		text-align: center;
		font-size: 18px;
		margin: 50rpx 0;
	}
	.answer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 650rpx;
		height: 100rpx;
		margin: 25rpx auto;
		padding-right: 20rpx;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.block {
		width: 16rpx;
		height: 100%;
		background-color: rgb(0, 185, 141);
	}
	.pagination {
		margin-top: 60rpx;
		padding: 0 20rpx;
	}
	.menu-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.menu-button {
		width: 100rpx;
		height: 60rpx;
	}
	.menu {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		width: 750rpx;
		height: 500rpx;
		padding: 20rpx 0 0 0;
	}
	.unit {
		width: 150rpx;
	}
	.question-button {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		padding: 0;
		text-align: center;
	}
	.question-button-normal {
		border: 1px solid #007aff;
		font-size: 14px;
	}
	.question-button-active {
		background-color: #007aff;
		color: white;
		font-size: 14px;
	}
	.question-button-hover {
		background-color: #B2B2B2;
	}
	.submit-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 150rpx;
		height: 80rpx;
		margin: 0;
		margin-right: 20rpx;
		border-radius: 15px;
		background-color: #465CFF;
		color: white;
		font-size: 14px;
	}
	.submit-button-hover {
		background-color: #C0C4CC;
	}
	.fail-message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
