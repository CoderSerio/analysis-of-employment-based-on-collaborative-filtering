"use strict";
var pages_questionnaire_types = require("./types.js");
const { NoChoice } = pages_questionnaire_types.Answer;
const {
  Realistic,
  Investigative,
  Artistic,
  Social,
  Enterprising,
  Conventional
} = pages_questionnaire_types.Type;
const questions = [
  { id: 1, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 2, title: "\u5927\u90E8\u5206\u4EBA\u8BA4\u4E3A\u4F60\u975E\u5E38\u53CB\u5584", type: [Social, Conventional], value: NoChoice },
  { id: 3, title: "\u4F60\u5BF9\u79D1\u6280\u975E\u5E38\u611F\u5174\u8DA3", type: [Investigative], value: NoChoice },
  { id: 4, title: "\u4F60\u6709\u8F83\u597D\u7684\u97F3\u4E50\u3001\u827A\u672F\u9274\u8D4F\u80FD\u529B", type: [Artistic], value: NoChoice },
  { id: 5, title: "\u4F60\u603B\u662F\u79EF\u6781\u4E3B\u52A8", type: [Realistic, Social, Enterprising], value: NoChoice }
];
const intQuestionnaireResult = {
  R: 10,
  I: 10,
  A: 10,
  S: 10,
  E: 10,
  C: 10
};
exports.intQuestionnaireResult = intQuestionnaireResult;
exports.questions = questions;
