export enum Type {
	Realistic = "R", 		// 现实型
	Investigative = "I",	// 研究型
	Artistic = "A",			// 艺术型
	Social = "S",			// 社会型
	Enterprising = "E",		// 企业型
	Conventional = "C"		// 常规型
}

export enum Answer {
	NoChoice = 0,				// 未选择
	VeryMatched = 1,			// 非常匹配
	Matched = 2,				// 匹配
	Mismatched = 3,				// 不匹配
	VeryMismatched = 4			// 非常不匹配
}

export interface Question {
	id: number
	title: string
	type: Array<Type>
	value: Answer
}

export interface Page {
	type: 'prev' | 'next'
	current: number
}

export interface AnswerCheckEvent extends Object {
	detail: {
		value: string;
	}
}

export interface TotalScore {
	[key: string]: number;
}

