export const bodyLock = (value: boolean) => {
	if (value) {
		document.body.style.overflowY = 'hidden'
		document.body.style.marginRight = '17px'
	} else {
		document.body.style.overflowY = 'auto'
		document.body.style.marginRight = '0px'
	}
}
