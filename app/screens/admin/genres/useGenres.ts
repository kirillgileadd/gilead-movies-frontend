import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/Table/Table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/GenreSevice'

import { toastError } from '@/utils/api/toastr.error'

import { getAdminUrl } from '@/configs/api.config'


export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debounceTerm = useDebounce(searchTerm, 500)

	const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

	const usersData = useQuery(
		['genres', debounceTerm],
		() => GenreService.getGenres(debounceTerm),
		{
			select: ({ data }) =>
				data.map(
					(item) =>
						({
							_id: item._id,
							editUrl: getAdminUrl(`/genres/edit/${item._id}`),
							items: [item.icon, item.name],
						} as ITableItem)
				),

			onError(error) {
				toastError(error, 'Список Жанров')
			},
		}
	)

	const { mutateAsync: deleteGenre } = useMutation(
		'delete genre',
		(id: string) => GenreService.delete(id),
		{
			onError(error) {
				toastError(error, 'Жанр не удален!')
			},
			onSuccess() {
				toastr.success('Жанр удален!', 'удаление прошло успешно')
				usersData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...usersData,
			searchTerm,
			deleteGenre,
		}),
		[searchTerm, usersData, deleteGenre, handleSearch]
	)
}
