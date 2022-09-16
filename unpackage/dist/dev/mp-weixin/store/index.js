"use strict";
var common_vendor = require("../common/vendor.js");
const state = {
  testInfo: {},
  userInfo: {},
  questionnaireResult: {}
};
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
};
common_vendor.createStore({
  state,
  mutations
});
