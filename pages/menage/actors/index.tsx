import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Layout from '@/components/layout/Layout'

import { Meta } from '@/utils/meta/Meta'

import ActorsList from '../../../app/screens/admin/actors/ActorsList'

import { NextPageAuth } from '@/types/auth.types'


const AdminActorsList: NextPageAuth = () => {
	return (
		<Meta title="Список актеров">
			<Layout>
				<AdminNavBar />
				<ActorsList />
			</Layout>
		</Meta>
	)
}

AdminActorsList.isOnlyAdmin = true

export default AdminActorsList
