import { useRouter } from 'next/router'
import { FC, memo, useCallback, useState } from 'react'
import { useQuery } from 'react-query'

import styles from '@/components/RandomMovie/RandomMovie.module.scss'

import MaterialIcon from '@/ui/MaterialIcon'

import MovieService from '@/services/MovieService'

import { getMovieUrl } from '@/configs/api.config'

import { IMovie } from '@/types/movie.types'


const RandomMovie: FC = () => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const { data, refetch } = useQuery(
		'get random movie',
		() => MovieService.getRandomMovie(),
		{
			select: ({ data }) =>
				({ ...data, slug: getMovieUrl(data.slug) } as IMovie),
			refetchOnWindowFocus: false,
		}
	)

	const getRandomMovie = useCallback(() => {
		refetch()
		if (data) {
			router.push(data.slug)
		}
	}, [])

	const onSetOpen = useCallback(() => {
		setOpen((prev) => !prev)
	}, [])

	return (
		<div className={styles.random__movie_box}>
			{open ? (
				<div className={styles.random__movie}>
					<div onClick={onSetOpen}>
						<MaterialIcon icon={'MdMovie'} />
					</div>
					<h6>Не знаешь что выбрать?</h6>
					<p>Положись на удачу</p>
					<button onClick={getRandomMovie} className="btn-primary">
						Рандомный Фильм!
					</button>
				</div>
			) : (
				<div onClick={onSetOpen} className={styles.random__movie_preview}>
					<MaterialIcon icon={'MdMovie'} />
				</div>
			)}
		</div>
	)
}

export default memo(RandomMovie)
