import axios, { $api } from '@/utils/api/api.interceptors'

import { getActorsUrl } from '@/configs/api.config'

import { IActorModel } from '@/types/movie.types'


export default class ActorService {
	static async getActors(searchTerm: string) {
		return await $api.get<IActorModel[]>(getActorsUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	}

	static async deleteActor(id: string) {
		return await axios.delete(getActorsUrl(`/${id}`))
	}
}
