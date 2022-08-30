import React, { FC, memo } from 'react'

import PopularMovies from '@/components/Statistic/PopularMovies/PopularMovies'
import UsersCount from '@/components/Statistic/UsersCount/UsersCount'


const Statistic: FC = () => {
	return (
		<div>
			<PopularMovies />
			<UsersCount />
		</div>
	)
}

export default memo(Statistic)
