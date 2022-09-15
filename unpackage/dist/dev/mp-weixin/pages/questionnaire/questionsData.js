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
  { id: 5, title: "\u4F60\u603B\u662F\u79EF\u6781\u4E3B\u52A8", type: [Realistic, Social, Enterprising], value: NoChoice },
  { id: 6, title: "\u4F60\u5BF9\u4E8E\u672A\u6765\u5145\u6EE1\u671F\u5F85", type: [Investigative, Artistic, Enterprising], value: NoChoice },
  { id: 7, title: "\u4F60\u6709\u505A\u8BB0\u5F55\u7684\u4E60\u60EF", type: [Conventional], value: NoChoice },
  { id: 8, title: "\u6BD4\u8D77\u8D5A\u66F4\u591A\u7684\u94B1,\u4F60\u66F4\u5E0C\u671B\u80FD\u66F4\u81EA\u7531", type: [Artistic], value: NoChoice },
  { id: 9, title: "\u4F60\u613F\u610F\u957F\u671F\u5B66\u4E60\u65B0\u4E8B\u7269", type: [Investigative, Enterprising], value: NoChoice },
  { id: 10, title: "\u4F60\u66F4\u503E\u5411\u4E8E\u8FC7\u5E73\u6DE1\u7A33\u5B9A\u7684\u751F\u6D3B", type: [Social, Conventional], value: NoChoice },
  { id: 11, title: "\u4F60\u5B9E\u8DF5\u6C34\u5E73\u8FDC\u9AD8\u4E8E\u7406\u8BBA\u6C34\u5E73", type: [Realistic], value: NoChoice },
  { id: 12, title: "\u4F60\u5F88\u5BB9\u6613\u4E0E\u964C\u751F\u4EBA\u6DF7\u719F", type: [Social], value: NoChoice },
  { id: 13, title: "\u4F60\u5BF9\u81EA\u5DF1\u7684\u5B66\u5386\u8FD8\u7B97\u81EA\u4FE1", type: [Investigative, Social, Enterprising], value: NoChoice },
  { id: 14, title: "\u4F60\u6709\u8F83\u597D\u7684\u7ECF\u6D4E\u57FA\u7840", type: [Investigative, Artistic, Enterprising], value: NoChoice },
  { id: 15, title: "\u4F60\u8BA4\u4E3A\u9075\u5B88\u89C4\u8303\u5F88\u6709\u5FC5\u8981", type: [Conventional], value: NoChoice },
  { id: 16, title: "\u4F60\u5BCC\u6709\u60F3\u8C61\u529B", type: [Investigative, Artistic, Enterprising], value: NoChoice },
  { id: 17, title: "\u4F60\u5584\u89E3\u4EBA\u610F", type: [Social, Conventional], value: NoChoice },
  { id: 18, title: "\u4F60\u5173\u6CE8\u65F6\u4E8B\u548C\u5404\u79CD\u5927\u4E8B", type: [Social], value: NoChoice },
  { id: 19, title: "\u4F60\u505A\u4E8B\u524D\u603B\u662F\u5148\u62DF\u5B9A\u8BA1\u5212", type: [Realistic, Conventional], value: NoChoice },
  { id: 20, title: "\u4F60\u6DF1\u4FE1\u6CA1\u6709\u4EBA\u8109\u5C31\u96BE\u4EE5\u83B7\u5F97\u6210\u529F", type: [Social, Enterprising], value: NoChoice }
];
exports.questions = questions;
