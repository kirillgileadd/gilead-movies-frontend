import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/Table/Table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import MovieService from '@/services/MovieService'

import { toastError } from '@/utils/api/toastr.error'
import { convertGenersList } from '@/utils/string/convertGenersList'

import { getAdminUrl } from '@/configs/api.config'


export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debounceTerm = useDebounce(searchTerm, 500)

	const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

	const moviesData = useQuery(
		['movies', debounceTerm],
		() => MovieService.getAllMovies(debounceTerm),
		{
			select: ({ data }) =>
				data.map(
					(item) =>
						({
							_id: item._id,
							editUrl: getAdminUrl(`movie/edit/${item._id}`),
							items: [
								item.title,
								item.countOpened,
								item.rating,
								convertGenersList(item.genres),
							],
						} as ITableItem)
				),

			onError(error) {
				toastError(error, 'Список фильмов')
			},
		}
	)

	const { mutateAsync: deleteMovie } = useMutation(
		'delete movie',
		(id: string) => MovieService.deleteMovie(id),
		{
			onError(error) {
				toastError(error, 'Фильм не удален!')
			},
			onSuccess() {
				toastr.success('Фильм удален!', 'удаление прошло успешно')
				moviesData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...moviesData,
			searchTerm,
			deleteMovie,
		}),
		[searchTerm, moviesData, deleteMovie, handleSearch]
	)
}
