import cl from 'classnames'
import React, { FC, memo } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcons } from '@/types/itcon.types'


const MaterialIcon: FC<{ icon: TypeMaterialIcons; className?: string }> = ({
																																						 icon,
																																						 className,
																																					 }) => {
	const Icon = MaterialIcons[icon]
	return (
		<Icon className={cl(className, 'w-6 h-6 text-gray-500')} /> || (
			<MaterialIcons.MdFilterDrama />
		)
	)
}

export default memo(MaterialIcon)
