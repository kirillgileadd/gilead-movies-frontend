import React, { FC } from 'react'
import { ITableRow } from '@/ui/Table/Table.interface'
import styles from './Table.module.scss'

const TableRow: FC<ITableRow> = ({ children }) => {
	return (
		<ul className={styles.table_row}>
			{children}
		</ul>
	)
}

export default TableRow
