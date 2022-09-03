import React, { FC } from 'react'
import { ITableHead } from '@/ui/Table/Table.interface'
import styles from './Table.module.scss'

const TableHead: FC<ITableHead> = ({ children }) => {
	return (
		<div className={styles.table_head}>
			{children}
		</div>
	)
}

export default TableHead
