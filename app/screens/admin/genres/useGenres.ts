import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/Table/Table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/GenreSevice'
import UserService from '@/services/UserService'

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
							editUrl: getAdminUrl(`genre/edit/${item._id}`),
							items: [item.icon, item.name],
						} as ITableItem)
				),

			onError(error) {
				toastError(error, 'Список Жанров')
			},
		}
	)

	const { mutateAsync: deleteUser } = useMutation(
		'delete user',
		(id: string) => UserService.deleteUser(id),
		{
			onError(error) {
				toastError(error, 'Пользователь не удален!')
			},
			onSuccess() {
				toastr.success('Пользователь удален!', 'удаление прошло успешно')
				usersData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...usersData,
			searchTerm,
			deleteUser,
		}),
		[searchTerm, usersData, deleteUser, handleSearch]
	)
}
