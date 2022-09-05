import React, { FC } from 'react'

import AdminHeader from '@/components/AdminHeader/AdminHeader'

import Table from '@/ui/Table/Table'
import TableActions from '@/ui/Table/TableActions'
import TableBody from '@/ui/Table/TableBody'
import TableCell from '@/ui/Table/TableCell'
import TableContainer from '@/ui/Table/TableContainer'
import TableHead from '@/ui/Table/TableHead'
import TableRow from '@/ui/Table/TableRow'
import TableSkeleton from '@/ui/Table/TableSkeleton'

import { useMovies } from './useMovies'


const MoviesList: FC = () => {
	const { searchTerm, handleSearch, deleteMovie, data, isLoading } = useMovies()
	return (
		<div>
			<AdminHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				title={'Список фильмов'}
			/>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Название</TableCell>
							<TableCell>Количесво просмотров</TableCell>
							<TableCell>Рейтинг</TableCell>
							<TableCell>Жанры</TableCell>
							<TableCell>Управление</TableCell>
						</TableRow>
					</TableHead>
					{isLoading ? (
						<TableSkeleton />
					) : (
						<TableBody>
							{data &&
								data.map((movie) => (
									<TableRow key={movie._id}>
										{movie.items.map((cell) => (
											<TableCell key={cell}>{cell}</TableCell>
										))}
										<TableCell>
											<TableActions
												editUrl={movie.editUrl}
												onDelete={() => deleteMovie(movie._id)}
											/>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					)}
				</Table>
			</TableContainer>
		</div>
	)
}

export default MoviesList
