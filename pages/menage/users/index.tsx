import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Layout from '@/components/layout/Layout'

import UsersList from '../../../app/screens/admin/UsersList'
import { NextPageAuth } from '@/types/auth.types'
import { Meta } from '@/utils/meta/Meta'


const AdminUsersList: NextPageAuth = () => {
	return (
		<Meta title='Пользователи'>
			<Layout>
				<AdminNavBar />
				<UsersList />
			</Layout>
		</Meta>
	)
}

AdminUsersList.isOnlyAdmin = true

export default AdminUsersList
