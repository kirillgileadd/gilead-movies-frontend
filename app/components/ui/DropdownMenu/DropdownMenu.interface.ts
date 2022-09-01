import { Dispatch, ReactNode, SetStateAction } from 'react'

import { IconsType } from '@/types/itcon.types'

export interface IDropMenuItem {
	link: string
	name: string
	icon: IconsType
}

export interface IDropdownMenu {
	children: ReactNode
	className?: string
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	profileLogoRef: any
}
