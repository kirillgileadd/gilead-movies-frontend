import React from 'react'

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar'
import Layout from '@/components/layout/Layout'

import EditGenre from '../../../../app/screens/admin/genres/genre/EditGenre'

import { NextPageAuth } from '@/types/auth.types'


const GenreEdit: NextPageAuth = () => {
	return (
		<Layout>
			<AdminNavBar />
			<EditGenre />
		</Layout>
	)
}

GenreEdit.isOnlyAdmin = true

export default GenreEdit
