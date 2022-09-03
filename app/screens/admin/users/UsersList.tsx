import React, { FC, useCallback, useState } from 'react'

import AdminHeader from '@/components/AdminHeader/AdminHeader'

import Table from '@/ui/Table/Table'
import TableActions from '@/ui/Table/TableActions'
import TableBody from '@/ui/Table/TableBody'
import TableCell from '@/ui/Table/TableCell'
import TableContainer from '@/ui/Table/TableContainer'
import TableRow from '@/ui/Table/TableRow'
import TableSkeleton from '@/ui/Table/TableSkeleton'

import { IUserFilter } from './UserList.interface'
import UserTableHeader from './UserTableHeader'
import { useUsers } from './useUsers'


const UsersList: FC = () => {
	const [filters, setFilters] = useState<IUserFilter>({
		isAdmin: false,
	})
	const filterHandler = useCallback(
		() => setFilters((prev) => ({ ...prev, isAdmin: !prev.isAdmin })),
		[]
	)

	const { searchTerm, handleSearch, data, deleteUser, isLoading } =
		useUsers(filters)

	return (
		<div>
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
			<TableContainer>
				<Table>
					<UserTableHeader filterHandler={filterHandler} />
					{isLoading ? (
						<TableSkeleton />
					) : (
						<TableBody>
							{data &&
								data.map((user) => (
									<TableRow key={user._id}>
										{user.items.map((cell) => (
											<TableCell key={cell}>{cell}</TableCell>
										))}
										<TableCell>
											<TableActions
												editUrl={user.editUrl}
												onDelete={() => deleteUser(user._id)}
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

export default UsersList
