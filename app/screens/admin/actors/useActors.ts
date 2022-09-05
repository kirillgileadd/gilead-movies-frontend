import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/Table/Table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import ActorService from '@/services/ActorService'

import { toastError } from '@/utils/api/toastr.error'
import { convertData } from '@/utils/data/convertData'

import { getAdminUrl } from '@/configs/api.config'


export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debounceTerm = useDebounce(searchTerm, 500)

	const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

	const actorsData = useQuery(
		['actors', debounceTerm],
		() => ActorService.getActors(debounceTerm),
		{
			select: ({ data }) =>
				data.map(
					(item) =>
						({
							_id: item._id,
							editUrl: getAdminUrl(`actor/edit/${item._id}`),
							items: [item.name, item.countMovies, convertData(item.createdAt)],
						} as ITableItem)
				),

			onError(error) {
				toastError(error, 'Список актеров')
			},
		}
	)

	const { mutateAsync: deleteActor } = useMutation(
		'delete actor',
		(id: string) => ActorService.deleteActor(id),
		{
			onError(error) {
				toastError(error, 'Актер не удален!')
			},
			onSuccess() {
				toastr.success('Актер удален!', 'удаление прошло успешно')
				actorsData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...actorsData,
			searchTerm,
			deleteActor,
		}),
		[searchTerm, actorsData, deleteActor, handleSearch]
	)
}
