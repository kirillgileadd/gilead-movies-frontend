import Link from 'next/link'
import { FC } from 'react'

import AdminButton from '@/components/layout/Header/IconsMenu/Auth/AdminButton'
import ProfileMenu from '@/components/layout/Header/IconsMenu/Auth/ProfileMenu'

import Button from '@/ui/form-components/Button/Button'

import { IUserState } from '@/store/user/user.interface'

import styles from '../Header.module.scss'


const IconsMenu: FC<{ user: IUserState | null }> = ({ user }) => {
	return (
		<div className={styles.icons__menu}>
			{user?.isAdmin && <AdminButton />}
			{user ? (
				<ProfileMenu logo={user.email[0]} />
			) : (
				<Link href={'auth'}>
					<a href="">
						<Button className="bg-primary hover:bg-primary">Войти</Button>
					</a>
				</Link>
			)}
		</div>
	)
}

export default IconsMenu
