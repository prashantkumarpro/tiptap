import { useContext } from 'react'
import { TextEditorContext } from './context/TextEditorContext'

const FontButton = ({ action, isActive, disabled, label, icon }) => (
  <button
    onClick={action}
    disabled={disabled}
    className={`p-1 hover:bg-gray-700 rounded px-3 ${
      isActive ? 'is-active bg-gray-700' : ''
    }`}
  >
    {icon ? <i className={`fas fa-${icon}`}></i> : label}
  </button>
)

const Font = () => {
  const { editor } = useContext(TextEditorContext)

  return (
    <>
      <FontButton
        editor={editor}
        action={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        disabled={!editor.can().chain().focus().toggleBold().run()}
       icon="bold"
      />
      <FontButton
        editor={editor}
        action={() => editor.chain().focus().toggleCode().run()}
        isActive={editor.isActive('code')}
        disabled={!editor.can().chain().focus().toggleCode().run()}
       icon="code"
      />
      <FontButton
        editor={editor}
        action={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
       icon="italic"
      />
      <FontButton
        editor={editor}
        action={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
       icon="strikethrough"
      />
    </>
  )
}

export default Font
