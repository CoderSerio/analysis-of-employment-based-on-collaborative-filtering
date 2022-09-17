// 暂时没什么用，先留着吧...
export interface getThresholdRequest {
	
}

export type getThresholdResponse = {
	data: {
		name: string,
		threshold: {[key: string]: number},
		description: string
	}, 
} | {
	errCode: number,
	errMsg: string,
	requestId: string,
}