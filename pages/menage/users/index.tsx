import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Layout from '@/components/layout/Layout'

import UsersList from '../../../app/screens/admin/UsersList'
import { NextPageAuth } from '../../../app/types/auth.types'


const AdminUsersList: NextPageAuth = () => {
	return (
		<Layout>
			<AdminNavBar />
			<UsersList />
		</Layout>
	)
}

AdminUsersList.isOnlyAdmin = true

export default AdminUsersList
