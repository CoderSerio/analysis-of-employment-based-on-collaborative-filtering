import { Type, Question, Answer } from './types' 
const { NoChoice } = Answer
const { 
	Realistic, 		// 现实
	Investigative, 	// 科研
	Artistic, 		// 艺术
	Social, 		// 社会
	Enterprising, 	// 企业
	Conventional 	// 常规
} = Type

export const questions: Array<Question> = [
	{ id: 1, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 2, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 3, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 4, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 5, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 6, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 7, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 8, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 9, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 10, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 11, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 12, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 13, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 14, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
	{ id: 15, title: '你处理事务的能力令人信赖', type: [Realistic, Social, Enterprising, Conventional], value: NoChoice },
]