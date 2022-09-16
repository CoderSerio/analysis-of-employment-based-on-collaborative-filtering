import { createStore, useStore } from 'vuex';
import { 
	TestInfo,
	UserInfo,
	QuestionnaireResult
} from './types'

const state = {
	testInfo: {
		
	},
	userInfo: {
		
	},
	questionnaireResult: {
		
	}
}

const mutations = {
	setTestInfo(testInfo) {
		state.testInfo = testInfo;
	},
	setUserInfo(userInfo) {
		state.userInfo = userInfo;
	},
	setQuestionnaireResult(questionnaireResult) {
		state.questionnaireResult = questionnaireResult;
	}
}

export const store = createStore({
	state: state,
	mutations: mutations
});