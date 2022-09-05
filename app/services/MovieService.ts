import { IMovie } from '@/shared/../types/movie.types'

import axios, { $api } from '@/utils/api/api.interceptors'

import { getMoviesUrl } from '@/configs/api.config'


export default class MovieService {
	static async getAllMovies(searchTerm?: string) {
		return await $api.get<IMovie[]>(getMoviesUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	}

	static async getRandomMovie() {
		return await $api.get<IMovie>(getMoviesUrl('/random'))
	}

	static async getPopularMovies() {
		return await $api.get<IMovie[]>(getMoviesUrl('/most-popular'))
	}

	static async deleteMovie(id: string) {
		return await axios.delete(getMoviesUrl(`/${id}`))
	}
}
