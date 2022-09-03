import React, { FC, forwardRef, Ref } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './SearchInput.module.scss'
import cl from 'classnames'

interface SearchInputProps {
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
	ref?: any
	onBlur?: () => void
	focus?: boolean
	fullwidth?: boolean
}

// eslint-disable-next-line react/display-name
const SearchInput: FC<SearchInputProps> = forwardRef(
	({ value, onChange, fullwidth }, ref: Ref<HTMLInputElement>) => {
		return (
			<div className={cl({ [styles.fullwidth]: fullwidth }, styles.input)}>
				<MaterialIcon icon='MdSearch' />
				<input
					ref={ref}
					className={styles.input__value}
					placeholder='Поиск'
					value={value}
					onChange={onChange}
					type='text'
					name='search-input'
					id='search-input'
				/>
			</div>
		)
	},
)

export default SearchInput
