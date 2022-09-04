import React, { FC } from 'react'

import { IAdminHeader } from '@/components/AdminHeader/AdminHeader.interface'

import SearchInput from '@/ui/Input/SearchInput'

import styles from './AdminHeader.module.scss'


const AdminHeader: FC<IAdminHeader> = ({ searchTerm, handleSearch, title }) => {
	return (
		<div className={styles.admin_header}>
			<h3 className={styles.title}>{title}</h3>
			<SearchInput value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default AdminHeader
