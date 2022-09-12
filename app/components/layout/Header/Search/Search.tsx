import cl from 'classnames'
import { FC, memo, useEffect, useRef } from 'react'

import GenreSearchList from '@/components/layout/Header/Search/GenreSearchList'
import MoviesSearchList from '@/components/layout/Header/Search/MoviesSearchList'
import { useSearch } from '@/components/layout/Header/Search/useSearch'

import SearchInput from '@/ui/Input/SearchInput'

import styles from './Search.module.scss'

export interface ISearch {
	searchHandler: (value: boolean) => void
}

const Search: FC<ISearch> = ({ searchHandler }) => {
	const {
		searchGenresQuery,
		searchMoviesQuery,
		isSuccess,
		handleSearch,
		searchTerm,
	} = useSearch()
	const searchBgRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>()

	useEffect(() => {
		inputRef?.current?.focus()
		document.addEventListener('click', (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (path.includes(searchBgRef.current)) {
				searchHandler(false)
			}
		})
	}, [])

	return (
		<>
			<div
				ref={searchBgRef}
				className="fixed left-0 right-0 top-0 bottom-0 z-1"
			></div>
			<div className={cl(styles.search__block)}>
				<SearchInput
					ref={inputRef}
					fullwidth
					value={searchTerm}
					onChange={handleSearch}
				/>
				{isSuccess && searchTerm && (
					<div className={styles.list__box}>
						{searchGenresQuery.data!.length === 0 &&
						searchMoviesQuery.data!.length === 0 ? (
							<>
								<p>Ничего не найдено, попробуйте еще раз ;)</p>
							</>
						) : (
							<>
								<GenreSearchList genres={searchGenresQuery.data || []} />
								<MoviesSearchList movies={searchMoviesQuery.data || []} />
							</>
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default memo(Search)
