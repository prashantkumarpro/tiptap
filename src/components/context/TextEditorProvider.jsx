import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/react'
import TextAlign from '@tiptap/extension-text-align'
import { TextEditorContext } from './TextEditorContext'

export const TextEditorProvider = ({ children }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ],

    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: `
            <h1>👌Heading 1</h1>
            <p>This is a paragraph  text.</p>
            <ol>
             <li>This is a bullet list.</li>
             <li>And it has three list items.</li>
             <li>Here is the third one.</li>
           </ol>
            `
  })

  if (!editor) return null

  return (
    <TextEditorContext.Provider value={{ editor }}>
      {children}
    </TextEditorContext.Provider>
  )
}
