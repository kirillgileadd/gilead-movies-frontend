import { IMenu } from '@/components/layout/Navigation/Menu/menu.interface'

export const menuData: IMenu = {
	title: 'Меню',
	items: [
		{
			title: 'Популярное',
			icon: 'MdOutlinePoll',
			href: '/popular',
		},
		{
			title: 'В разработке',
			icon: 'MdOutlineWatchLater',
			href: '/commig-soon',
		},
	],
}

export const authMenu: IMenu = {
	title: 'Общее',
	items: [],
}
