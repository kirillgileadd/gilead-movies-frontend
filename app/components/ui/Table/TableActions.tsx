import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'
import { ITableActions } from '@/ui/Table/Table.interface'

import styles from './Table.module.scss'


const TableActions: FC<ITableActions> = ({ editUrl, onDelete }) => {
	return (
		<div className={styles.table_actions}>
			<MaterialIcon icon={'BiEdit'} />
			<button onClick={onDelete}>
				<MaterialIcon icon={'BiTaskX'} />
			</button>
		</div>
	)
}

export default TableActions
