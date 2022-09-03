import cl from 'classnames'
import React, { FC, memo } from 'react'
import * as BiIcon from 'react-icons/bi'
import * as MaterialIcons from 'react-icons/md'

import { IconsType } from '@/types/itcon.types'


const MaterialIcon: FC<{ icon: IconsType; className?: string }> = ({
	icon,
	className,
}) => {
	// @ts-ignore
	const Icon = MaterialIcons[icon] || BiIcon[icon]

	return (
		<Icon className={cl(className, 'w-6 h-6 text-gray-500')} /> || (
			<MaterialIcons.MdFilterDrama />
		)
	)
}

export default memo(MaterialIcon)
