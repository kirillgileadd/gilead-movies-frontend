export const convertData = (data: string) => {
	return new Date(data).toLocaleDateString('ru')
}
