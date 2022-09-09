import { FC, HTMLAttributes, forwardRef } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './Search.module.scss'

interface ISearchButton extends HTMLAttributes<HTMLButtonElement> {
	searchHandler: (value: boolean) => void
}

const SearchButton: FC<ISearchButton> = ({ searchHandler, ...rest }) => {
	const onSearch = () => {
		searchHandler(true)
	}
	return (
		<button onClick={onSearch} className={styles.search_button} {...rest}>
			<MaterialIcon icon={'MdSearch'} />
			<p>Поиск</p>
		</button>
	)
}

export default SearchButton
