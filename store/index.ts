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

const getters = {
	questionnaireResult (state) {
		return state.questionnaireResult
	}
}

const mutations = {
	setTestInfo(state, testInfo) {
		state.testInfo = testInfo;
	},
	setUserInfo(state, userInfo) {
		state.userInfo = userInfo;
	},
	setQuestionnaireResult(state, questionnaireResult) {
		state.questionnaireResult = questionnaireResult;
	}
}


const actions = {
	
}

const store = createStore({
	state,
	mutations,
	getters,
});

export default store;