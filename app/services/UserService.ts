import axios from '@/utils/api/api.interceptors'

import { getUsersUrl } from '@/configs/api.config'

import { IUser } from '@/types/user.types'


export default class UserService {
	static async getUsers(searchTerm: string) {
		return await axios.get<IUser[]>(getUsersUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	}

	static async deleteUser(id: string) {
		return await axios.delete(getUsersUrl(`/${id}`))
	}
}
