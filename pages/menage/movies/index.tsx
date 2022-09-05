import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Layout from '@/components/layout/Layout'

import { Meta } from '@/utils/meta/Meta'

import MoviesList from '../../../app/screens/admin/movies/MoviesList'

import { NextPageAuth } from '@/types/auth.types'


const AdminActorsList: NextPageAuth = () => {
	return (
		<Meta title="Список фильмов">
			<Layout>
				<AdminNavBar />
				<MoviesList />
			</Layout>
		</Meta>
	)
}

AdminActorsList.isOnlyAdmin = true

export default AdminActorsList
