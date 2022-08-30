import cl from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from '@/components/AdminNavBar/AdminNavBar.module.scss'
import { IAdminNavbarItem } from '@/components/AdminNavBar/admin.navbar.interface'


const AdminNavBarItem: FC<IAdminNavbarItem> = ({ title, href }) => {
	const router = useRouter()
	console.log(router.asPath === href)
	return (
		<li
			className={cl({ [styles.active]: router.asPath === href }, styles.item)}
		>
			<Link href={href}>
				<a>
					<p>{title}</p>
				</a>
			</Link>
		</li>
	)
}

export default AdminNavBarItem
