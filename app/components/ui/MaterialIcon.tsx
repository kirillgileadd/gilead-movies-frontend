import cl from 'classnames'
import React, { FC, memo } from 'react'
import * as MaterialIcons from 'react-icons/md'
import * as BoxIcons from 'react-icons/bi'

import { IconsType } from '@/types/itcon.types'


const MaterialIcon: FC<{ icon: IconsType; className?: string }> = ({
																																		 icon,
																																		 className,
																																	 }) => {
	// @ts-ignore
	const Icon = MaterialIcons[icon] || BoxIcons[icon]
	return (
		<Icon className={cl(className, 'w-6 h-6 text-gray-500')} /> || (
			<BoxIcons.BiAbacus />
		)
	)
}

export default memo(MaterialIcon)
