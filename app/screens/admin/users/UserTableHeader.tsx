import React, { FC } from 'react'

import TableCell from '@/ui/Table/TableCell'
import TableHead from '@/ui/Table/TableHead'
import TableRow from '@/ui/Table/TableRow'


const UserTableHeader: FC<{ filterHandler: () => void }> = ({
	filterHandler,
}) => {
	return (
		<TableHead>
			<TableRow>
				<TableCell>Электронная почта</TableCell>
				<TableCell>Дата регистрации</TableCell>
				<TableCell
					className="select-none cursor-pointer"
					onClick={filterHandler}
				>
					Администратор
				</TableCell>
				<TableCell>Управление</TableCell>
			</TableRow>
		</TableHead>
	)
}

export default UserTableHeader
