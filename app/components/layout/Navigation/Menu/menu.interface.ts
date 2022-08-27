import { TypeMaterialIcons } from '@/types/itcon.types'

export interface IMenuItem {
	icon: TypeMaterialIcons
	title: string
	href: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
