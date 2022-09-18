import { Type } from '../pages/questionnaire/types'
import {
	getThresholdResponse
} from './types'


const db = uniCloud.database();

export const request = {
	async setThreshold(name: string, type: Array<Type>) {
		try {
			const res = await db.collection('resultSet').where({
				name: name
			}).update({
				
			})
			return res;
		} catch(e) {
			return {
				errCode: e.errCode,
				errMsg: e.errMsg,
				requestId: e.requestId
			};
		}
	},
	async getThreshold() {
		try {
			const res = await db.collection('resultSet').get();
			return res;
		} catch(e) {
			return {
				errCode: e.errCode,
				errMsg: e.errMsg,
				requestId: e.requestId
			};
		}
	}
}