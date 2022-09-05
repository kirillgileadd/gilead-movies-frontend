import React from 'react'

import Layout from '@/components/layout/Layout'

import { Meta } from '@/utils/meta/Meta'

import Admin from '../../app/screens/admin/Admin'

import { NextPageAuth } from '@/types/auth.types'


const MenagePage: NextPageAuth = () => {
	return (
		<Meta title={'Админ панель'}>
			<Layout>
				<Admin />
			</Layout>
		</Meta>
	)
}

MenagePage.isOnlyAdmin = true

export default MenagePage
