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

import { useGenres } from './useGenres'


const GenresList: FC = () => {
	const { searchTerm, handleSearch, data, deleteUser, isLoading } = useGenres()
	return (
		<div>
			<AdminHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				title={'Список жанров'}
			/>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Иконка</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Управление</TableCell>
						</TableRow>
					</TableHead>
					{isLoading ? (
						<TableSkeleton />
					) : (
						<TableBody>
							{data &&
								data.map((genre) => (
									<TableRow key={genre._id}>
										{genre.items.map((cell) => (
											<TableCell key={cell}>{cell}</TableCell>
										))}
										<TableCell>
											<TableActions
												editUrl={genre.editUrl}
												onDelete={() => deleteUser(genre._id)}
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

export default GenresList
