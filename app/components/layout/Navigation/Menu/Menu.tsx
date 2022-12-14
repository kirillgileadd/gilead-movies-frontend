import { FC, memo, useMemo } from 'react'

import MenuItem from '@/components/layout/Navigation/Menu/MenuItem'
import { IMenu } from '@/components/layout/Navigation/Menu/menu.interface'

import styles from './Menu.module.scss'


const Menu: FC<{ menu: IMenu }> = ({ menu }) => {
	const menuItems = useMemo(
		() => menu.items.map((item) => <MenuItem key={item.href} {...item} />),
		[]
	)

	return (
		<div className={styles.menu}>
			<div className={styles.lists}>
				<ul>{menuItems}</ul>
			</div>
		</div>
	)
}

export default memo(Menu)
