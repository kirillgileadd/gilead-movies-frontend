import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'
import { ITableActions } from '@/ui/Table/Table.interface'

import styles from './Table.module.scss'


const TableActions: FC<ITableActions> = ({ onDelete }) => {
	return (
		<div className={styles.table_actions}>
			<button>
				<MaterialIcon icon={'BiEdit'} />
			</button>
			<button onClick={onDelete}>
				<MaterialIcon icon={'BiTaskX'} />
			</button>
		</div>
	)
}

export default TableActions
