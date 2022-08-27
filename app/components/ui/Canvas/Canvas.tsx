import {
	BarElement,
	CategoryScale,
	Chart,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { IMovie } from '../../../types/movie.types'

import styles from './Canvas.module.scss'


Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const Canvas: FC<{ movies: IMovie[] }> = ({ movies }) => {
	const options = {
		responsive: true,
		// maintainAspectRatio: false,
	}
	const moviesData = {
		labels: movies.map((movie) => movie.title),
		data: movies.map((movie) => movie.countOpened),
	}
	const data = {
		labels: [...moviesData.labels],
		datasets: [
			{
				data: [...moviesData.data],
				backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
				borderWidth: 1,
			},
		],
	}

	return (
		<div className={styles.canvas}>
			<Bar options={options} data={data} />
		</div>
	)
}

export default Canvas
