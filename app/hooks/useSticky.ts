import { useEffect, useState } from 'react'

export const useSticky = (defaultOffset = 150) => {
	const [lastScroll, setLastScroll] = useState<number>(0)
	const [menuHidden, setMenuHidden] = useState<boolean>(false)
	const scrollPosition = () =>
		window.pageYOffset || document.documentElement.scrollTop

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (
				scrollPosition() > lastScroll &&
				!menuHidden &&
				lastScroll >= defaultOffset
			) {
				setMenuHidden(true)
			} else if (scrollPosition() < lastScroll && menuHidden) {
				setMenuHidden(false)
			}
			setLastScroll((prev) => scrollPosition())
		})
	}, [lastScroll])

	return [menuHidden]
}
