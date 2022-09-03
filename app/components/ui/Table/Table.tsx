import { FC } from 'react'
import { ITable } from '@/ui/Table/Table.interface'

const Table: FC<ITable> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	)
}

export default Table
