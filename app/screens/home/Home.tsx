import Image from 'next/image'
import { FC } from 'react'

import RandomMovie from '@/components/RandomMovie/RandomMovie'

import testImage from '@/assets/img/witcher.jpg'

import { Meta } from '@/utils/meta/Meta'

import Genres from '../../components/Genres/Genres'

import styles from './Home.module.scss'
import { IHome } from './home.interface'
import MovieCollection from '@/components/MovieCollection/MovieCollection'
import MovieService from '@/services/MovieService'


const Home: FC<IHome> = () => {
	return (
		<Meta
			title='Смотреть фильмы онлайн'
			description='Смотреть фильмы онлайн бесплано'
		>
			<div className={styles.main}>
				<div className={styles.main_image}>
					<Image
						draggable={false}
						height={600}
						objectFit='cover'
						objectPosition='center'
						src={testImage}
					/>
				</div>
				<RandomMovie />
				<Genres />
				<MovieCollection title={'Популярные фильмы'} filterFunc={MovieService.getPopularMovies} />
			</div>
		</Meta>
	)
}

export default Home
