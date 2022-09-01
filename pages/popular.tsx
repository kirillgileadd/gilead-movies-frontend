import React from 'react'

import Layout from '@/components/layout/Layout'
import { Meta } from '@/utils/meta/Meta'


const Popular = () => {
	return (
		<Meta
			title={'Самые популярные фильмы 2022'}
			description={'Самые популярные фильмы 2022 бесплатно'}
		>
			<Layout>
				<div className='text-title'>Поплярное</div>
			</Layout>
		</Meta>
	)
}

export default Popular
