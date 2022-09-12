import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'
import { ITableActions } from '@/ui/Table/Table.interface'

import styles from './Table.module.scss'

const TableActions: FC<ITableActions> = ({ onDelete, editUrl }) => {
	return (
		<div className={styles.table_actions}>
			<Link href={editUrl}>
				<a>
					<button className={styles.actions_button}>
						<MaterialIcon icon={'BiEdit'} />
					</button>
				</a>
			</Link>
			<button onClick={onDelete} className={styles.actions_button}>
				<MaterialIcon icon={'BiTaskX'} />
			</button>
		</div>
	)
}

export default TableActions
