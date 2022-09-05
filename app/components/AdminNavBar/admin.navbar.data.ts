import { IAdminNavbarItem } from '@/components/AdminNavBar/admin.navbar.interface'

import { getAdminUrl } from '@/configs/api.config'

export const adminNavbarData: IAdminNavbarItem[] = [
	{
		id: '1',
		title: 'Статистика',
		href: getAdminUrl(''),
	},
	{
		id: '2',
		title: 'Пользователи',
		href: getAdminUrl('/users'),
	},
	{
		id: '3',
		title: 'Фильмы',
		href: getAdminUrl('/movies'),
	},
	{
		id: '4',
		title: 'Жанры',
		href: getAdminUrl('/genres'),
	},
	{
		id: '5',
		title: 'Актеры',
		href: getAdminUrl('/actors'),
	},
]
