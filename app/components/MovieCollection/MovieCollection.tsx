import { FC } from 'react'
import { useQuery } from 'react-query'
import { AxiosResponse } from 'axios'
import MovieCollectionItem from '@/components/MovieCollection/MovieCollectionItem'
import { IMovie } from '@/types/movie.types'

import styles from './MovieCollection.module.scss'

interface IMovieCollection {
	title: string
	filterFunc: () => Promise<AxiosResponse<IMovie[]>>
}

const MovieCollection: FC<IMovieCollection> = ({ filterFunc, title }) => {
	const { data, isLoading, isSuccess } = useQuery(
		title,
		() => filterFunc(),
		{ select: ({ data }) => data },
	)
	return (
		<div className={styles.collection_inner}>
			<h3>{title}</h3>
			<ul className={styles.list}>
				{data && data.map(movie => <MovieCollectionItem key={movie._id} {...movie} />)}
			</ul>
		</div>
	)
}

export default MovieCollection
