import React, { FC } from 'react'

import SkeletonLoader from '@/ui/loading/SkeletonLoader'


const TableSkeleton: FC = () => {
	return (
		<div>
			<SkeletonLoader
				height={'64px'}
				style={{
					marginBottom: '0.5rem',
					borderRadius: '0.5rem',
				}}
				count={10}
			/>
		</div>
	)
}

export default TableSkeleton
