import { IconsType } from '@/types/itcon.types'

export interface IGenre {
	title: string
	items: IGenreItem[]
}

export interface IGenreItem {
	_id: string
	name: string
	icon: IconsType
	slug: string
	description: string
	createdAt: string
}

export interface IFetchGenreItem {
	_id: string
	name: string
	icon: IconsType
	slug: string
	description: string
	createdAt: string
}
