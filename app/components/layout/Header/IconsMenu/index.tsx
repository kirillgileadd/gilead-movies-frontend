import dynamic from 'next/dynamic'

export const IconsMenu = dynamic(() => import('./IconsMenu'), { ssr: false })
