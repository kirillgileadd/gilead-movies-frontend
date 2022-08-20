import { FC, memo } from 'react'

import PopularMovieItem from '@/components/Statistic/PopularMovies/PopularMovieItem'
import styles from '@/components/Statistic/PopularMovies/PopularMovies.module.scss'

import { IMovie } from '../../../types/movie.types'


const PopularMoviesList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<ul className={styles.list}>
			{movies.map((movie) => (
				<PopularMovieItem {...movie} key={movie._id} />
			))}
		</ul>
	)
}

export default memo(PopularMoviesList)
