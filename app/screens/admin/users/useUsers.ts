import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/Table/Table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import UserService from '@/services/UserService'

import { toastError } from '@/utils/api/toastr.error'
import { convertData } from '@/utils/data/convertData'

import { getAdminUrl } from '@/configs/api.config'

import { IUserFilter } from './UserList.interface'
import { IUser } from '@/types/user.types'


export const useUsers = (filters: IUserFilter) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debounceTerm = useDebounce(searchTerm, 500)

	const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

	const filteredData = (filters: IUserFilter, data: IUser[]) => {
		let filteredUsers = data
		if (filters.isAdmin) {
			filteredUsers = data.filter((item) => item.isAdmin)
		}
		return filteredUsers
	}

	const usersData = useQuery(
		['users data', debounceTerm],
		() => UserService.getUsers(debounceTerm),
		{
			select: ({ data }) =>
				filteredData(filters, data).map(
					(item) =>
						({
							_id: item._id,
							editUrl: getAdminUrl(`user/edit/${item._id}`),
							items: [item.email, convertData(item.createdAt), item.isAdmin],
						} as ITableItem)
				),

			onError(error) {
				toastError(error, 'Список пользователей')
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
		[searchTerm, usersData, deleteUser]
	)
}
