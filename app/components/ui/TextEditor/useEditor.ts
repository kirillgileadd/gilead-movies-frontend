import { EditorState, RichUtils, convertToRaw } from 'draft-js'
import * as React from 'react'
import { useEffect, useState } from 'react'

import { HTMLtoState, stateToHTML } from '@/ui/TextEditor/convert'
import { BlockType, InlineStyle } from '@/ui/TextEditor/text.editor.config'

export type EditorApi = {
	state: EditorState
	onChange: (state: EditorState) => void
	toggleBlockType: (blockType: BlockType) => void
	currentBlockType: BlockType
	toggleInlineStyle: (inlineStyle: InlineStyle) => void
	hasInlineStyle: (inlineStyle: InlineStyle) => boolean
	onEditorStateChange: (editorState: EditorState) => void
}

export const useEditor = (value: string, onChange: any): EditorApi => {
	const [state, setState] = useState(() => EditorState.createEmpty())
	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (!isUpdated) {
			const defaultValue = value ? value : ''
			const blocksFromHtml = HTMLtoState(defaultValue)
			const newEditorState = EditorState.createWithContent(blocksFromHtml)
			setState(newEditorState)
		}
	}, [value, isUpdated])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setState(editorState)

		return onChange(stateToHTML(state.getCurrentContent()))
	}

	const toggleBlockType = React.useCallback((blockType: BlockType) => {
		setState((currentState) =>
			RichUtils.toggleBlockType(currentState, blockType)
		)
	}, [])

	const currentBlockType = React.useMemo(() => {
		const selection = state.getSelection()
		const content = state.getCurrentContent()
		const block = content.getBlockForKey(selection.getStartKey())
		return block.getType() as BlockType
	}, [state])

	const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
		setState((currentState) =>
			RichUtils.toggleInlineStyle(currentState, inlineStyle)
		)
	}, [])

	const hasInlineStyle = React.useCallback(
		(inlineStyle: InlineStyle) => {
			const currentStyle = state.getCurrentInlineStyle()
			return currentStyle.has(inlineStyle)
		},
		[state]
	)

	return React.useMemo(
		() => ({
			state,
			onEditorStateChange,
			onChange: setState,
			currentBlockType,
			toggleInlineStyle,
			hasInlineStyle,
			toggleBlockType,
		}),
		[state, onEditorStateChange]
	)
}
