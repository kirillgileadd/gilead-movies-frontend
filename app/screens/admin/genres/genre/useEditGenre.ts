import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IGenreItem } from '@/components/Genres/genres.interface'

import { GenreService } from '@/services/GenreSevice'

import { toastError } from '@/utils/api/toastr.error'

export interface IEditGenreData extends Omit<IGenreItem, '_id'> {}

export const useEditGenre = (setValue: UseFormSetValue<IEditGenreData>) => {
	const { push, query } = useRouter()

	const genreId = String(query.id)

	const typedGetKeys = <T>(obj: T) => Object.keys(obj) as Array<keyof T>

	const { isLoading } = useQuery(
		['genre by id', genreId],
		() => GenreService.getOne(genreId),
		{
			enabled: !!query.id,
			onSuccess({ data }) {
				typedGetKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError() {
				toastError('Жанр не найден!')
			},
		}
	)

	const mutation = useMutation(
		['edit genre'],
		(data: IEditGenreData) => GenreService.update(genreId, data),
		{
			onSuccess() {
				toastr.success('Обновление', 'жанр успешно обновлен')
				push('genres')
			},
		}
	)

	const onSubmit: SubmitHandler<IEditGenreData> = async (data) => {
		await mutation.mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
