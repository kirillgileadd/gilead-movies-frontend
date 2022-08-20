import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Statistic from '@/components/Statistic/Statistic'

import { Meta } from '@/utils/meta/Meta'


const Admin = () => {
	return (
		<Meta title="Панель Администратора">
			<AdminNavBar />
			<Statistic />
		</Meta>
	)
}

export default Admin
