import { ReactNode } from 'react'

export interface ITableContainer {
	children: ReactNode
}

export interface ITable {
	children: ReactNode
}

export interface ITableHead {
	children: ReactNode
}

export interface ITableRow {
	children: ReactNode
}

export interface ITableCell {
	children: string | ReactNode | boolean
	className?: string
	onClick?: () => void
}

export interface ITableBody {
	children: ReactNode
}

export interface ITableActions {
	editUrl: string
	onDelete: () => void
}

export interface ITableItem {
	_id: string
	editUrl: string
	items: Array<string>
}
