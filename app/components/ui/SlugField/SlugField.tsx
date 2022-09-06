import React, { FC } from 'react'

import TextField, {
	TextFieldProps,
} from '@/ui/form-components/TextField/TextField'

import styles from './SlugField.module.scss'

export interface ISlugField extends TextFieldProps {
	generateSlug: () => void
}

const SlugField: FC<ISlugField> = ({
	value,
	onChange,
	label,
	helperText,
	generateSlug,
	...rest
}) => {
	return (
		<div className={styles.slug_field}>
			<TextField
				value={value}
				onChange={onChange}
				label={label}
				helperText={helperText}
				{...rest}
			/>
			<button onClick={generateSlug} type="button">
				Generate
			</button>
		</div>
	)
}

export default SlugField
