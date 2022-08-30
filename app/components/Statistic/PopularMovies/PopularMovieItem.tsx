import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@/components/Statistic/PopularMovies/PopularMovies.module.scss'

import MaterialIcon from '@/ui/MaterialIcon'

import { getMoviesUrl } from '@/configs/api.config'

import { IMovie } from '../../../types/movie.types'


const PopularMovieItem: FC<IMovie> = ({
	countOpened,
	slug,
	poster,
	title,
	rating,
}) => {
	return (
		<li className={styles.item}>
			<Link href={getMoviesUrl(`/${slug}`)}>
				<a>
					<Image
						draggable={false}
						className="-z-1"
						layout="fill"
						src={poster}
					/>
					<div className={styles.item_content}>
						<h6>{title}</h6>
						<div className={styles.watch_count}>
							<h6>Просмотры:</h6>
							<p>{countOpened}</p>
						</div>
						<div className={styles.rating}>
							{Array(rating)
								.fill(0)
								.map((_, i) => (
									<MaterialIcon key={i} icon={'MdStar'} />
								))}
						</div>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default PopularMovieItem
