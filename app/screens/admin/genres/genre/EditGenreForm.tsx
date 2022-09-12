import { FC, useEffect } from 'react'
import {
	Control,
	Controller,
	FormState,
	SubmitHandler,
	UseFormGetValues,
	UseFormHandleSubmit,
	UseFormSetValue,
} from 'react-hook-form'

import SlugField from '@/ui/SlugField/SlugField'
import TextEditor from '@/ui/TextEditor/TextEditor'
import Button from '@/ui/form-components/Button/Button'
import TextField from '@/ui/form-components/TextField/TextField'

import { createSlug } from '@/utils/string/createSlug'

import styles from './EditGenre.module.scss'
import { IEditGenreData } from './useEditGenre'

interface IEditGenreForm {
	onSubmit: SubmitHandler<IEditGenreData>
	handleSubmit: UseFormHandleSubmit<IEditGenreData>
	formState: FormState<IEditGenreData>
	control: Control<IEditGenreData, any>
	getValues: UseFormGetValues<IEditGenreData>
	setValue: UseFormSetValue<IEditGenreData>
}

const EditGenreForm: FC<IEditGenreForm> = ({
	onSubmit,
	formState: { errors },
	handleSubmit,
	control,
	getValues,
	setValue,
}) => {
	const generateSlug = () => {
		const slug = String(createSlug(getValues('name')))
		setValue('slug', slug)
	}

	return (
		<form className={styles.edit_form} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="icon"
				control={control}
				rules={{
					required: 'Выберете иконку',
				}}
				defaultValue={'MdAdd'}
				render={({ field: { value, onChange, name } }) => (
					<div>
						<TextField
							helperText={errors.icon?.message}
							type="text"
							value={value}
							label={'Название жанра'}
							onChange={onChange}
							name={name}
						/>
					</div>
				)}
			/>
			<Controller
				name="name"
				control={control}
				rules={{
					required: 'Введите название жанра',
				}}
				defaultValue={''}
				render={({ field: { value, onChange, name } }) => (
					<div>
						<TextField
							helperText={errors.name?.message}
							type="text"
							value={value}
							label={'Название жанра'}
							onChange={onChange}
							name={name}
						/>
					</div>
				)}
			/>
			<Controller
				name="slug"
				control={control}
				rules={{
					required: 'Введите название ссылки',
				}}
				defaultValue={''}
				render={({ field: { value, onChange, name } }) => (
					<SlugField
						helperText={errors.slug?.message}
						type="text"
						value={value}
						label={'Название слыки'}
						onChange={onChange}
						generateSlug={generateSlug}
						name={name}
					/>
				)}
			/>
			<Controller
				name="description"
				control={control}
				rules={{
					required: 'Заполните описание',
				}}
				render={({ field: { value, onChange, name } }) => (
					<TextEditor
						type="text"
						helperText={errors.description?.message}
						value={value}
						onChange={onChange}
						name={name}
					/>
				)}
			/>
			<Button className="bg-primary">Обновить</Button>
		</form>
	)
}

export default EditGenreForm
