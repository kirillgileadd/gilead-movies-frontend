import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Statistic from '@/components/Statistic/Statistic'

import { Meta } from '@/utils/meta/Meta'

import styles from './Admin.module.scss'

const Admin = () => {
	return (
		<Meta title='Панель Администратора'>
			<main className={styles.main}>
				<AdminNavBar />
				<Statistic />
			</main>
		</Meta>
	)
}

export default Admin
