import cl from 'classnames'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'
import { ITableCell } from '@/ui/Table/Table.interface'

import styles from './Table.module.scss'


const TableCell: FC<ITableCell> = ({ children, className, onClick }) => {
	if (typeof children === 'boolean') {
		return (
			<li
				onClick={onClick}
				className={cl('flex justify-center', styles.table_cell)}
			>
				{children ? (
					<MaterialIcon icon={'BiCheck'} className="text-primary" />
				) : (
					''
				)}
			</li>
		)
	}
	return (
		<li onClick={onClick} className={cl(className, styles.table_cell)}>
			{children}
		</li>
	)
}

export default TableCell
