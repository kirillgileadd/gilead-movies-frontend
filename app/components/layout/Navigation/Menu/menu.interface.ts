import { IconsType } from '@/types/itcon.types'

export interface IMenuItem {
	icon: IconsType
	title: string
	href: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
