import { ChangeEvent } from 'react'

export interface IAdminHeader {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	title: string
}
