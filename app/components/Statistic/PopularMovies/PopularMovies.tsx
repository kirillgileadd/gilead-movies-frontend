import React, { FC, memo } from 'react'
import { useQuery } from 'react-query'

import PopularMoviesList from '@/components/Statistic/PopularMovies/PopularMoviesList'

import Canvas from '@/ui/Canvas/Canvas'
import Subtitle from '@/ui/Subtitle/Subtitle'

import MovieService from '@/services/MovieService'

import styles from './PopularMovies.module.scss'


const PopularMovies: FC = () => {
	const { data, isLoading, isSuccess } = useQuery(
		'popular movies',
		() => MovieService.getPopularMovies(),
		{ select: ({ data }) => data }
	)

	return (
		<div className={styles.movies_wrapper}>
			<Subtitle className="mb-6">Поулярные фильмы</Subtitle>
			<div className={styles.movies_block}>
				<PopularMoviesList movies={data || []} />
				<Canvas movies={data || []} />
			</div>
		</div>
	)
}

export default memo(PopularMovies)
