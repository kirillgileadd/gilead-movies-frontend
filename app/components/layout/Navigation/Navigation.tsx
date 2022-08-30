import cl from 'classnames'
import { memo } from 'react'

import Menu from '@/components/layout/Navigation/Menu/Menu'
import { menuData } from '@/components/layout/Navigation/Menu/menu.data'

import { useSticky } from '@/hooks/useSticky'

import styles from './Navigation.module.scss'


const Navigation = () => {
	const [menuHidden] = useSticky()
	return (
		<div className={cl({ [styles.hidden]: menuHidden }, styles.navigation)}>
			<Menu menu={menuData} />
		</div>
	)
}

export default memo(Navigation)
