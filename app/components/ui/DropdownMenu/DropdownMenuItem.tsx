import cl from 'classnames'
import Link from 'next/link'
import React, { FC } from 'react'

import { IDropMenuItem } from '@/ui/DropdownMenu/DropdownMenu.interface'
import MaterialIcon from '@/ui/MaterialIcon'

import styles from './DropdownMenu.module.scss'


const DropdownMenuItem: FC<{ item: IDropMenuItem; className?: string }> = ({
	item,
	className,
}) => {
	return (
		<li className={cl(className, styles.item)}>
			<Link href={item.link}>
				<a>
					<MaterialIcon icon={item.icon} />
					<p>{item.name}</p>
				</a>
			</Link>
		</li>
	)
}

export default DropdownMenuItem
