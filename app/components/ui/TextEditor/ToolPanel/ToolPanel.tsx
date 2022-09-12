import cl from 'classnames'
import React, { FC } from 'react'

import { BlockType, InlineStyle } from '@/ui/TextEditor/text.editor.config'
import { EditorApi } from '@/ui/TextEditor/useEditor'

import styles from '../TextEditor.module.scss'

export type ToolPanel = Omit<
	EditorApi,
	'state' | 'onChange' | 'onEditorStateChange'
>

const ToolPanel: FC<ToolPanel> = ({
	hasInlineStyle,
	toggleInlineStyle,
	toggleBlockType,
	currentBlockType,
}) => {
	const INLINE_STYLES_CODES = Object.values(InlineStyle)
	return (
		<div>
			<button
				type="button"
				className={cl(
					styles.tool_button,
					currentBlockType === BlockType.h1 && styles.tool_button_active
				)}
				onClick={(e) => {
					e.preventDefault()
					toggleBlockType(BlockType.h1)
				}}
			>
				Заголовок
			</button>
			{INLINE_STYLES_CODES.map((code) => {
				const onClick = (e: any) => {
					e.preventDefault()
					toggleInlineStyle(code)
				}

				return (
					<button
						type="button"
						key={code}
						className={cl(
							'tool-panel__item',
							hasInlineStyle(code) && 'tool-panel__item_active'
						)}
						onClick={onClick}
					>
						{code}
					</button>
				)
			})}
		</div>
	)
}

export default ToolPanel
