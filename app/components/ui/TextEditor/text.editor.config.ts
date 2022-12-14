import { DefaultDraftBlockRenderMap } from 'draft-js'
import Immutable from 'immutable'

export enum BlockType {
	h1 = 'header-one',
	h2 = 'header-two',
	h3 = 'header-three',
	h4 = 'header-four',
	h5 = 'header-five',
	h6 = 'header-six',
	blockquote = 'blockquote',
	code = 'code-block',
	list = 'unordered-list-item',
	orderList = 'ordered-list-item',
	cite = 'cite',
	default = 'unstyled',
}

export enum InlineStyle {
	BOLD = 'BOLD',
	ITALIC = 'ITALIC',
	UNDERLINE = 'UNDERLINE',
	ACCENT = 'ACCENT',
}

export const CUSTOM_STYLE_MAP = {
	[InlineStyle.ACCENT]: {
		backgroundColor: '#F7F6F3',
		color: '#A41E68',
	},
}

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
	[BlockType.cite]: {
		element: 'cite',
	},
})

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(
	CUSTOM_BLOCK_RENDER_MAP
)
