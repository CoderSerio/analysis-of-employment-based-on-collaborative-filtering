import { Type } from '../pages/questionnaire/types'

const db = uniCloud.database();

export const request = {
	async setThreshold(name: string, type: Array<Type>) {
		try {
			db.collection('resultSet').where({
				name: name
			}).update({
				
			})
		} catch(e) {
			return `${e.codfe}: ${e.message}`;
		}
		
	},
	async getThreshold() {
		try {
			const dataSet = await db.collection('resultSet').get();
			return dataSet;
		} catch(e) {
			return `${e.codfe}: ${e.message}`;
		}
	}
}