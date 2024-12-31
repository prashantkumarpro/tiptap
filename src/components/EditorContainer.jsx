import { EditorContent } from '@tiptap/react'
import { useContext } from 'react'
import { TextEditorContext } from './context/TextEditorContext'

const EditorContainer = () => {
  const { editor } = useContext(TextEditorContext)
  return (
    <>
      <EditorContent
        editor={editor}
        className='editor max-w-3xl mx-auto  my-0 p-1 border-2 border-gray-700 border-t-0
                h-[80vh] overflow-y-auto overflow-x-hidden'
      />
    </>
  )
}

export default EditorContainer
