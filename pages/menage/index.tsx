import React from 'react'

import Layout from '@/components/layout/Layout'

import Admin from '../../app/screens/admin/Admin'
import { NextPageAuth } from '../../app/types/auth.types'


const MenagePage: NextPageAuth = () => {
	return (
		<Layout>
			<Admin />
		</Layout>
	)
}

MenagePage.isOnlyAdmin = true

export default MenagePage
