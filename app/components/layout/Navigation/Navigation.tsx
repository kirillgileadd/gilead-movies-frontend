import cl from 'classnames'
import { memo, useEffect, useState } from 'react'

import Menu from '@/components/layout/Navigation/Menu/Menu'
import { menuData } from '@/components/layout/Navigation/Menu/menu.data'

import styles from './Navigation.module.scss'


const Navigation = () => {
	const [lastScroll, setLastScroll] = useState<number>(0)
	const [menuHidden, setMenuHidden] = useState<boolean>(false)
	const defaultOffset = 200
	const scrollPosition = () =>
		window.pageYOffset || document.documentElement.scrollTop

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollPosition() > lastScroll && !menuHidden) {
				setMenuHidden(true)
				console.log('down')
			} else if (scrollPosition() < lastScroll && menuHidden) {
				setMenuHidden(false)
				console.log('up')
			}
			setLastScroll((prev) => scrollPosition())
		})
	}, [lastScroll])

	return (
		<div className={cl({ [styles.hidden]: menuHidden }, styles.navigation)}>
			<Menu menu={menuData} />
		</div>
	)
}

export default memo(Navigation)
