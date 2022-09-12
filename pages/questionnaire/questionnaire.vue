<template>
	<view class="questionnaire">
		<view class="questionnaire-title">就业推荐问卷调查</view>
		<view class="progress-box">
			<text>问题进度</text>
			<!-- 可能会加进度条，但这鬼ui还要vip，秀 -->
			<view class="progress"></view>
		</view>
		<view class="menu-box">
			<view class="menu-button" @click="showMenu = true">
				<fui-icon name="menu"></fui-icon>
			</view>
			<button class="submit-button" hover-class="submit-button-hover" @click="submitData">提交</button>
		</view>
		<view class="question">
			<view class="title">
				<text>{{currentQuestion.id}}: </text>
				<text>{{currentQuestion.title}}</text>
			</view>
		</view>
		<view class="answers">
			<fui-radio-group @change="answerCheck" v-model="checkedAnswer">
				<fui-label v-for="(answer,index) in answers" :key="index">
					<view class="answer">
						<view class="block"></view>
						<text>{{answer}}</text>
						<fui-radio :value="(String)(index+1)" scaleRatio="1.2"></fui-radio>
					</view>
				</fui-label>
			</fui-radio-group>
		</view>
		<view class="pagination">
			<fui-pagination :total="10*questionnaire.length" size="32" prevText="上一题" nextText="下一题"
			:current="currentPage" color="white" background="rgb(0, 185, 141)"  @change="changePage"></fui-pagination>
		</view>
		<fui-bottom-popup :show="showMenu" @close="showMenu = false">
			<scroll-view class="menu" scroll-y="true" enable-flex="true">
				<view class="unit" v-for="num in questionnaire.length" :key="num">
					<button :class="'question-button '+(questionnaire[num-1].value?'question-button-active':'question-button-normal')"
					hover-class="question-button-hover" @click="flyPage(num)">{{num}}</button>
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
	class Question {
		id: number
		title: string
		type: 'R' | 'I' | 'A' | 'S' | 'E' | 'C'
		keyOccupation?: unknown//暂时先不写这个，没看懂
		value?: '1' | '2' | '3' | '4'
	}
	class Page {
		type: 'prev' | 'next'
		current: number
	}
	let questionnaire: Array<Question> = [
		{
			id: 1,
			title: '长文字问题模拟问题1',
			type: 'R',
		},
		{
			id: 2,
			title: '问题2',
			type: 'R'
		},
		{
			id: 3,
			title: '问题3',
			type: 'R'
		},
		{
			id: 4,
			title: '问题4',
			type: 'R'
		},
		{
			id: 5,
			title: '问题5',
			type: 'R'
		}
	]
	const answers: Array<string> = ['非常符合我的情况', '比较符合我的情况', '不太符合我的情况', '非常不符合我的情况']
	let currentQuestion: Ref = ref(questionnaire[0])
	let currentPage: number = 1
	let checkedAnswer: Ref = ref(null)
	let showMenu: Ref = ref(false)
	let submit: Ref = ref(null)//submit按钮dom
	let submitCheck: Ref = ref(false)
	
	//这个event不知道类型
	const answerCheck = (event: any) => {
		// console.log(event.detail.value)
		questionnaire[currentQuestion.value.id-1].value = event.detail.value
		// console.log(questionnaire)
	}
	const changePage = (page: Page) => {
		// console.log(page)
		currentPage = page.current
		currentQuestion.value = questionnaire[currentPage-1]
		checkedAnswer.value = questionnaire[currentPage-1].value
		// console.log(questionnaire)
	}
	const flyPage = (page: number) => {
		currentPage = page
		currentQuestion.value = questionnaire[currentPage-1]
		checkedAnswer.value = questionnaire[currentPage-1].value
		showMenu.value = false
	}
	const submitData = () => {
		let isok: boolean = true
		for(let i = 0; i < questionnaire.length; i++) {
			if(questionnaire[i].value == undefined) {
				isok = false
				break
			}
		}
		submitCheck.value = isok
		submit.value.show({})
		if(isok) {
			// console.log('提交成功！')
			//跳一下路由
		} else {
			// console.log('提交失败！')
			
		}
	}
	const showMessage = () => {
		
	}
	
	import { Ref, ref } from 'vue'
	
</script>

<style scoped>
	.question {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.questionnaire-title {
		font-size: 24px;
		font-weight: 700;
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
		font-size: 24px;
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
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 60rpx;
	}
	.menu {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		height: 500rpx;
		padding: 20rpx;
	}
	.unit {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100rpx;
	}
	.question-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
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
		background-color: #409EFF;
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
