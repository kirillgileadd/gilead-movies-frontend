import IconsMenu from '@/components/layout/Header/IconsMenu/IconsMenu'
import Search from '@/components/layout/Header/Search/Search'
import Logo from '@/components/layout/Navigation/Logo'

import styles from './Header.module.scss'


const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<Search />
			<IconsMenu />
		</div>
	)
}

export default Header
