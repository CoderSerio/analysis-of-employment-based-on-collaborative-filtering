"use strict";
var common_vendor = require("../common/vendor.js");
const state = {
  testInfo: {},
  userInfo: {},
  questionnaireResult: {}
};
const getters = {
  questionnaireResult(state2) {
    return state2.questionnaireResult;
  }
};
const mutations = {
  setTestInfo(state2, testInfo) {
    state2.testInfo = testInfo;
  },
  setUserInfo(state2, userInfo) {
    state2.userInfo = userInfo;
  },
  setQuestionnaireResult(state2, questionnaireResult) {
    state2.questionnaireResult = questionnaireResult;
  }
};
const store = common_vendor.createStore({
  state,
  mutations,
  getters
});
exports.store = store;
