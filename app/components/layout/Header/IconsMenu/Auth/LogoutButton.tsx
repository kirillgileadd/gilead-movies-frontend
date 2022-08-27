import React, { MouseEvent } from 'react'

import styles from '@/ui/DropdownMenu/DropdownMenu.module.scss'
import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'


const LogoutButton = () => {
	const { logout } = useActions()

	const onLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className={styles.item}>
			<a onClick={onLogout}>
				<MaterialIcon icon={'MdLogout'} />
				<p>Выйти</p>
			</a>
		</li>
	)
}

export default LogoutButton
