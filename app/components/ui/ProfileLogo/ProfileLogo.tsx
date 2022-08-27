import cl from 'classnames'
import React, { FC } from 'react'

const ProfileLogo: FC<{
	name: string
	classname?: string
}> = ({ name, classname }) => {
	return (
		<div
			className={cl(
				classname,
				'block p-2 pointer-events-none rounded-3xl bg-primary h-12 w-12 flex-center text-center cursor-pointer'
			)}
		>
			<p className="text-3xl uppercase text-white">{name}</p>
		</div>
	)
}

export default ProfileLogo
