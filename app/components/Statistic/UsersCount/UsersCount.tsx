import { FC } from 'react'
import { useQuery } from 'react-query'

import MaterialIcon from '@/ui/MaterialIcon'
import Subtitle from '@/ui/Subtitle/Subtitle'

import AdminService from '@/services/AdminService'

import styles from './UserCount.module.scss'


const UsersCount: FC = () => {
	const { data } = useQuery('users count', () => AdminService.getUsers(), {
		select: ({ data }) => data,
	})

	return (
		<div>
			<Subtitle>Пользователи</Subtitle>
			<div className={styles.inner}>
				<p>{data}</p>
				<MaterialIcon icon={'MdSupervisedUserCircle'} />
			</div>
		</div>
	)
}

export default UsersCount
