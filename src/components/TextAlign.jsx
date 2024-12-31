import { useContext } from 'react'
import { TextEditorContext } from './context/TextEditorContext'

const TextAlign = () => {
  const { editor } = useContext(TextEditorContext)
  return (
    <>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={
          editor.isActive({ textAlign: 'left' })
            ? 'p-1 bg-gray-700 rounded px-3'
            : 'p-1 hover:bg-gray-700 rounded px-3'
        }
      >
        <i className='fas fa-align-left'></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={
          editor.isActive({ textAlign: 'right' })
            ? 'p-1 bg-gray-700 rounded px-3'
            : 'p-1 hover:bg-gray-700 rounded px-3'
        }
      >
        <i className='fas fa-align-right'></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={
          editor.isActive({ textAlign: 'center' })
            ? 'p-1 bg-gray-700 rounded px-3'
            : 'p-1 hover:bg-gray-700 rounded px-3'
        }
      >
        <i className='fas fa-align-center'></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={
          editor.isActive({ textAlign: 'justify' })
            ? 'p-1 bg-gray-700 rounded px-3'
            : 'p-1 hover:bg-gray-700 rounded px-3'
        }
      >
        <i className='fas fa-align-justify'></i>
      </button>
    </>
  )
}

export default TextAlign
