import { FC } from 'react'
import Link from 'next/link'
import { IMovie } from '@/types/movie.types'
import { getMovieUrl } from '@/configs/api.config'
import Image from 'next/image'

import styles from './MovieCollection.module.scss'

const MovieCollectionItem: FC<IMovie> = ({ slug, poster, title }) => {
	return (
		<Link href={getMovieUrl(slug)}>
			<a href=''>
				<div className={styles.item}>
					<div className={'rounded-xl overflow-hidden'}>
						<Image
							src={poster}
							draggable={false}
							width={225}
							height={300}
						/>
					</div>
					<h6>{title}</h6>
				</div>
			</a>
		</Link>
	)
}

export default MovieCollectionItem
