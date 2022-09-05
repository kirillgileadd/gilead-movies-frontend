import { IGenreItem } from '@/components/Genres/genres.interface'

export const convertGenersList = (arr: IGenreItem[]) => {
	return arr.map((genre) => genre.name).join(', ')
}
