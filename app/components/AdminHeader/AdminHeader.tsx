import React, { FC } from 'react'
import SearchInput from '@/ui/Input/SearchInput'
import styles from './AdminHeader.module.scss'
import { IAdminHeader } from '@/components/AdminHeader/AdminHeader.interface'

const AdminHeader: FC<IAdminHeader> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.admin_header}>
			<h3 className={styles.title}>Список пользователей</h3>
			<SearchInput
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default AdminHeader
