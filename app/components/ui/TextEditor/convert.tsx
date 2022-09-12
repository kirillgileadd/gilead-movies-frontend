import { convertFromHTML, convertToHTML } from 'draft-convert'

import {
	BlockType,
	CUSTOM_STYLE_MAP,
	InlineStyle,
} from '@/ui/TextEditor/text.editor.config'

export const stateToHTML = convertToHTML<InlineStyle, BlockType>({
	styleToHTML: (style) => {
		switch (style) {
			case InlineStyle.BOLD:
				return <strong />
			case InlineStyle.ACCENT:
				return (
					<span
						className="accent"
						style={CUSTOM_STYLE_MAP[InlineStyle.ACCENT]}
					/>
				)
			default:
				return null
		}
	},
	blockToHTML: (block) => {
		switch (block.type) {
			case BlockType.h1:
				return <h1 />

			case BlockType.default:
				return <p />
			default:
				return null
		}
	},
})

export const HTMLtoState = convertFromHTML<DOMStringMap, BlockType>({
	htmlToStyle: (nodeName, node, currentStyle) => {
		if (nodeName === 'strong') {
			return currentStyle.add(InlineStyle.BOLD)
		}
		if (nodeName === 'span' && node.classList.contains('accent')) {
			return currentStyle.add(InlineStyle.ACCENT)
		}

		return currentStyle
	},
	// @ts-ignore
	htmlToBlock(nodeName, node) {
		switch (nodeName) {
			case 'h1':
				return BlockType.h1
			case 'div':
			case 'p':
				return BlockType.default
			default:
				return null
		}
	},
})
