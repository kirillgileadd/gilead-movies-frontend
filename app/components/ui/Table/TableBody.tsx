import { FC } from 'react'
import { ITableBody } from '@/ui/Table/Table.interface'

const TableBody: FC<ITableBody> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	)
}

export default TableBody
