import { FC } from 'react'
import { ITableContainer } from '@/ui/Table/Table.interface'
import styles from './Table.module.scss'

const TableContainer: FC<ITableContainer> = ({ children }) => {
	return (
		<div className={styles.table_container}>
			{children}
		</div>
	)
}

export default TableContainer
