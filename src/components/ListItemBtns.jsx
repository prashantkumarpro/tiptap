import React, { useContext } from 'react'
import { TextEditorContext } from './context/TextEditorContext'

const ListItemBtns = () => {
  const { editor } = useContext(TextEditorContext)
  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? 'is-active bg-gray-700 p-1 px-3 rounded-3'
            : 'p-1 hover:bg-gray-700 rounded'
        }
      >
        <i className='fas fa-list'></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList')
            ? 'is-active bg-gray-700 p-1 px-3 rounded-3'
            : 'p-1 hover:bg-gray-700 rounded'
        }
      >
        <i className='fa-solid fa-list-ol'></i>
      </button>
    </>
  )
}

export default ListItemBtns
