import axios from '@/utils/api/api.interceptors'

import { getUsersUrl } from '@/configs/api.config'

export default class AdminService {
	static async getUsers() {
		return await axios.get(getUsersUrl('/count'))
	}
}
