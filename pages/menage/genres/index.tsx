import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Layout from '@/components/layout/Layout'

import { Meta } from '@/utils/meta/Meta'

import GenresList from '../../../app/screens/admin/genres/GenresList'

import { NextPageAuth } from '@/types/auth.types'


const AdminGenresList: NextPageAuth = () => {
	return (
		<Meta title="Список жанров">
			<Layout>
				<AdminNavBar />
				<GenresList />
			</Layout>
		</Meta>
	)
}

AdminGenresList.isOnlyAdmin = true

export default AdminGenresList
