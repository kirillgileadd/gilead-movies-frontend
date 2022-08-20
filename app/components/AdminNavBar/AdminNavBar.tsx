import React, { FC } from 'react'

import AdminNavBarItem from '@/components/AdminNavBar/AdminNavBarItem'
import { adminNavbarData } from '@/components/AdminNavBar/admin.navbar.data'

import styles from './AdminNavBar.module.scss'


const AdminNavBar: FC = () => {
	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				{adminNavbarData.map((item) => (
					<AdminNavBarItem {...item} key={item.href} />
				))}
			</ul>
		</div>
	)
}

export default AdminNavBar
