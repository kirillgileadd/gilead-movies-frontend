import { transliterate } from '@/utils/string/transliterating'

export const createSlug = (title: string) => {
	let slug
	if (title) {
		slug = transliterate(title.toLowerCase().replace(/\s/g, '-'))
	}
	return slug
}
