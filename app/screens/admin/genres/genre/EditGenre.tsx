import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from './EditGenre.module.scss'
import EditGenreForm from './EditGenreForm'
import { IEditGenreData, useEditGenre } from './useEditGenre'

const EditGenre: FC = () => {
	const { formState, control, setValue, handleSubmit, getValues, watch } =
		useForm<IEditGenreData>({
			mode: 'onChange',
		})

	const { onSubmit } = useEditGenre(setValue)
	return (
		<div className={styles.edit_genre}>
			<h3>Изменение жанра</h3>
			<EditGenreForm
				getValues={getValues}
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				formState={formState}
				control={control}
				setValue={setValue}
			/>
		</div>
	)
}

export default EditGenre
