import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/GenreSevice'
import MovieService from '@/services/MovieService'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debounceTerm = useDebounce(searchTerm, 500)

	const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

	const searchMoviesQuery = useQuery(
		['search movies', debounceTerm],
		() => MovieService.getAllMovies(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)
	const searchGenresQuery = useQuery(
		['search genres', debounceTerm],
		() => GenreService.getGenres(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)
	const isSuccess = searchGenresQuery.isSuccess && searchMoviesQuery.isSuccess

	return useMemo(
		() => ({
			isSuccess,
			handleSearch,
			searchGenresQuery,
			searchMoviesQuery,
			searchTerm,
		}),
		[searchTerm, isSuccess]
	)
}
