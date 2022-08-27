import React, { FC, memo, useCallback, useRef, useState } from 'react'

import LogoutButton from '@/components/layout/Header/IconsMenu/Auth/LogoutButton'

import DropdownMenu from '@/ui/DropdownMenu/DropdownMenu'
import DropdownMenuItem from '@/ui/DropdownMenu/DropdownMenuItem'
import ProfileLogo from '@/ui/ProfileLogo/ProfileLogo'


const ProfileMenu: FC<{ logo: string }> = ({ logo }) => {
	const [menuVisible, setMenuVisible] = useState<boolean>(false)
	const profileLogoRef = useRef<any>()

	const onMenuVisible = useCallback(() => {
		setMenuVisible((prev) => !prev)
	}, [menuVisible])

	return (
		<div className="relative">
			<button ref={profileLogoRef} onClick={onMenuVisible}>
				<ProfileLogo name={logo} />
			</button>
			<DropdownMenu
				profileLogoRef={profileLogoRef}
				open={menuVisible}
				setOpen={setMenuVisible}
			>
				<DropdownMenuItem
					item={{
						icon: 'MdOutlineSettings',
						name: 'Профиль',
						link: '/profile',
					}}
				/>
				<DropdownMenuItem
					item={{
						icon: 'MdFavorite',
						name: 'Избранное',
						link: '/favorites',
					}}
				/>
				<LogoutButton />
			</DropdownMenu>
		</div>
	)
}

export default memo(ProfileMenu)
