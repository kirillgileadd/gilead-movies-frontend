import { IconsMenu } from '@/components/layout/Header/IconsMenu'
import Search from '@/components/layout/Header/Search/Search'
import Logo from '@/components/layout/Navigation/Logo'

import { useAuth } from '@/hooks/useAuth'

import styles from './Header.module.scss'


const Header = () => {
	const { user } = useAuth()

	return (
		<div className={styles.header}>
			<Logo color={'white'} />
			<Search />
			<IconsMenu user={user} />
		</div>
	)
}

export default Header
