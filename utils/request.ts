import { Type } from '../pages/questionnaire/types'
import {
	getThresholdResponse
} from './types'


const db = uniCloud.database();

export const request = {
	async setThreshold(name: string,newdata:{}) {
		try {
			const res = await db.collection('resultSet').where({
				name: name
			}).update({
				threshold:newdata
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