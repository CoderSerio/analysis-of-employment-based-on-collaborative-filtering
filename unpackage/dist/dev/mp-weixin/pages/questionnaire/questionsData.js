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
  { id: 2, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 3, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 4, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 5, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 6, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 7, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 8, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 9, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 10, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 11, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 12, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 13, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 14, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
  { id: 15, title: "\u4F60\u5904\u7406\u4E8B\u52A1\u7684\u80FD\u529B\u4EE4\u4EBA\u4FE1\u8D56", type: [Realistic, Social, Enterprising, Conventional], value: NoChoice }
];
exports.questions = questions;
