import { IGenreItem } from '@/components/Genres/genres.interface'

import axios, { $api } from '@/utils/api/api.interceptors'

import { getGenresUrl } from '@/configs/api.config'

import { IEditGenreData } from '../screens/admin/genres/genre/useEditGenre'


export const GenreService = {
	async getGenres(searchTerm?: string) {
		return await $api.get<IGenreItem[]>(getGenresUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	},

	async getOne(id: string) {
		return await axios.get<IEditGenreData>(getGenresUrl(id))
	},

	async update(id: string, data: IEditGenreData) {
		return await axios.put<IEditGenreData>(getGenresUrl(id), data)
	},

	async delete(id: string) {
		return await axios.delete(getGenresUrl(id))
	},
}
