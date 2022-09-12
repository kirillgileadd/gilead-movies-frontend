import cl from 'classnames'
import { FC, useState } from 'react'

import { IconsMenu } from '@/components/layout/Header/IconsMenu'
import Search from '@/components/layout/Header/Search/Search'
import Logo from '@/components/layout/Navigation/Logo'
import Navigation from '@/components/layout/Navigation/Navigation'

import { useAuth } from '@/hooks/useAuth'
import { useSticky } from '@/hooks/useSticky'

import styles from './Header.module.scss'
import SearchButton from './Search/SearchButton'

const Header: FC = () => {
	const { user } = useAuth()
	const [menuHidden] = useSticky(250)
	const [isSearching, setSearching] = useState<boolean>(false)

	const searchHandler = (value: boolean) => {
		setSearching(value)
	}

	return (
		<div
			className={cl(
				{
					[styles.menu_hidden]: menuHidden,
					[styles.search_open]: isSearching,
				},
				styles.header
			)}
		>
			<Logo color={'white'} />
			{isSearching ? (
				<Search searchHandler={searchHandler} />
			) : (
				<div className="flex animate-fade items-center grow">
					<Navigation />
					<SearchButton searchHandler={searchHandler} />
					<IconsMenu user={user} />
				</div>
			)}
		</div>
	)
}

export default Header
