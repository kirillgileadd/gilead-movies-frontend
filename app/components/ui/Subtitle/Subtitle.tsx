import cl from 'classnames'
import { FC } from 'react'

import { ISubtitle } from '@/ui/Subtitle/subtitle.interface'


const Subtitle: FC<ISubtitle> = ({ children, className }) => {
	return <p className={cl('text-title', className)}>{children}</p>
}

export default Subtitle
