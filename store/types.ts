type bigNumber = string | number;

export interface TestInfo {
	testData: string;
}

export interface UserInfo {
	name: string,
	gender: string,
	age: bigNumber,
	avatar: string
}

export interface QuestionnaireResult {
	Realistic: bigNumber, 		// 实践
	Investigative: bigNumber, 	// 科研
	Artistic: bigNumber, 		// 艺术
	Social: bigNumber, 			// 社会
	Enterprising: bigNumber, 	// 企业
	Conventional: bigNumber, 	// 规范
}