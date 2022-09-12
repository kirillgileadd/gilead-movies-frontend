import cl from 'classnames'
import { Editor } from 'draft-js'
import 'draft-js/dist/Draft.css'
import React, { FC } from 'react'

import ToolPanel from '@/ui/TextEditor/ToolPanel/ToolPanel'
import {
	BLOCK_RENDER_MAP,
	CUSTOM_STYLE_MAP,
} from '@/ui/TextEditor/text.editor.config'
import { useEditor } from '@/ui/TextEditor/useEditor'
import { TextFieldProps } from '@/ui/form-components/TextField/TextField'

import styles from './TextEditor.module.scss'

interface ITextEditor extends TextFieldProps {
	className?: string
}

const TextEditor: FC<ITextEditor> = ({ className, value, name, onChange }) => {
	const {
		state,
		toggleBlockType,
		currentBlockType,
		toggleInlineStyle,
		hasInlineStyle,
		onEditorStateChange,
	} = useEditor(value, onChange)

	return (
		<div className={cl(styles.text_editor, className)}>
			<ToolPanel
				toggleBlockType={toggleBlockType}
				currentBlockType={currentBlockType}
				toggleInlineStyle={toggleInlineStyle}
				hasInlineStyle={hasInlineStyle}
			/>
			<div className={cl(styles.text_editor_block)}>
				<Editor
					placeholder="Введите ваш текст"
					editorState={state}
					blockRenderMap={BLOCK_RENDER_MAP}
					customStyleMap={CUSTOM_STYLE_MAP}
					onChange={onEditorStateChange}
				/>
			</div>
		</div>
	)
}

export default TextEditor
