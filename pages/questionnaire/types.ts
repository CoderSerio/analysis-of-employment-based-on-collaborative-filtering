export interface Question {
	id: number
	title: string
	type: 'R' | 'I' | 'A' | 'S' | 'E' | 'C'
	keyOccupation?: unknown//暂时先不写这个，没看懂
	value: string
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
