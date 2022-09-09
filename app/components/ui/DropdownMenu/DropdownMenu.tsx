import cl from 'classnames'
import React, { FC, useEffect, useRef } from 'react'

import { IDropdownMenu } from '@/ui/DropdownMenu/DropdownMenu.interface'

import styles from './DropdownMenu.module.scss'

const DropdownMenu: FC<IDropdownMenu> = ({
	children,
	setOpen,
	open,
	className,
	profileLogoRef,
}) => {
	const ref = useRef<any>()

	useEffect(() => {
		window.addEventListener('click', (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (
				!path.includes(ref.current) &&
				event.target !== profileLogoRef.current
			) {
				setOpen(false)
			}
		})
	}, [open])

	return (
		<ul
			ref={ref}
			className={cl({ [styles.open]: open }, styles.menu, className)}
		>
			{children}
		</ul>
	)
}

export default DropdownMenu
