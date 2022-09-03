import Link from 'next/link'
import React, { FC, memo } from 'react'

import Button from '@/ui/form-components/Button/Button'


const AdminButton: FC = () => {
	return (
		<Link href={'menage'}>
			<a>
				<Button className='mr-4'>Панель Админинистратора</Button>
			</a>
		</Link>
	)
}

export default memo(AdminButton)
