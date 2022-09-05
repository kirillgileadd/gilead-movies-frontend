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

import { useActors } from './useActors'


const ActorsList: FC = () => {
	const { data, deleteActor, isLoading, handleSearch, searchTerm } = useActors()
	return (
		<div>
			<AdminHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				title={'Список актеров'}
			/>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Имя</TableCell>
							<TableCell>Количесво фильмов</TableCell>
							<TableCell>Дата</TableCell>
						</TableRow>
					</TableHead>
					{isLoading ? (
						<TableSkeleton />
					) : (
						<TableBody>
							{data &&
								data.map((actor) => (
									<TableRow key={actor._id}>
										{actor.items.map((cell) => (
											<TableCell key={cell}>{cell}</TableCell>
										))}
										<TableCell>
											<TableActions
												editUrl={actor.editUrl}
												onDelete={() => deleteActor(actor._id)}
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

export default ActorsList
