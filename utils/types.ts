// 暂时没什么用，先留着吧...
export interface getThresholdRequest {
	
}

export interface getThresholdResponse {
	result: {
		[key: string]: any,
		data: {
			name: string,
			threshold: {[key: string]: number},
			description: string
		}
	}
} 
