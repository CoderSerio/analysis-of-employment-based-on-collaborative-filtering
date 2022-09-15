import { Type, Question, Answer } from './types' 
const { NoChoice } = Answer
const { 
	Realistic, 		// 实践
	Investigative, 	// 科研
	Artistic, 		// 艺术
	Social, 		// 社会
	Enterprising, 	// 企业
	Conventional 	// 规范
} = Type

export const questions: Array<Question> = [
	{ id: 1, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 2, title: '大部分人认为你非常友善', type: [Social, Conventional], value: NoChoice },
	{ id: 3, title: '你对科技非常感兴趣', type: [Investigative], value: NoChoice },
	{ id: 4, title: '你有较好的音乐、艺术鉴赏能力', type: [Artistic], value: NoChoice },
	{ id: 5, title: '你总是积极主动', type: [Realistic, Social, Enterprising], value: NoChoice },
	{ id: 6, title: '你对于未来充满期待', type: [Investigative, Artistic, Enterprising], value: NoChoice },
	{ id: 7, title: '你有做记录的习惯', type: [Conventional], value: NoChoice },
	{ id: 8, title: '比起赚更多的钱,你更希望能更自由', type: [Artistic], value: NoChoice },
	{ id: 9, title: '你愿意长期学习新事物', type: [Investigative, Enterprising], value: NoChoice },
	{ id: 10, title: '你更倾向于过平淡稳定的生活', type: [Social, Conventional], value: NoChoice },
	{ id: 11, title: '你实践水平远高于理论水平', type: [Realistic], value: NoChoice },
	{ id: 12, title: '你很容易与陌生人混熟', type: [Social], value: NoChoice },
	{ id: 13, title: '你对自己的学历还算自信', type: [Investigative, Social, Enterprising], value: NoChoice },
	{ id: 14, title: '你有较好的经济基础', type: [Investigative, Artistic, Enterprising], value: NoChoice },
	{ id: 15, title: '你认为遵守规范很有必要', type: [Conventional], value: NoChoice },
	{ id: 16, title: '你富有想象力', type: [Investigative, Artistic, Enterprising], value: NoChoice },
	{ id: 17, title: '你善解人意', type: [Social, Conventional], value: NoChoice },
	{ id: 18, title: '你关注时事和各种大事', type: [Social], value: NoChoice },
	{ id: 19, title: '你做事前总是先拟定计划', type: [Realistic, Conventional], value: NoChoice },
	{ id: 20, title: '你深信没有人脉就难以获得成功', type: [Social, Enterprising], value: NoChoice },
]