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
            <h2>🔥<b>Tiptap Text Editor Project</b></h2>
            <p>This project involved building a customizable and feature-rich text editor using the Tiptap framework. The editor includes a toolbar with essential text formatting options and a seamless user experience. Key features of the project include:</p>
            <ul>
             <li><b>Rich Text Formatting:</b> Implemented bold, italic, underline, and strike-through formatting.</li>
             <li><b>Heading Support:</b> Users can easily toggle between multiple heading levels (H1–H6) via a dropdown menu.</li>
             <li><b>Code and Text Alignment:</b> Added functionality to toggle code formatting and align text (left, center, right).</li>
             <li><b>Active Button States:</b> Buttons dynamically reflect the current state of formatting for improved usability.</li>
             <li><b>Tooltip Integration:</b> Tooltips provide descriptive labels on hover, enhancing accessibility.</li>
             <li><b>Reusable Components:</b> Designed reusable FontButton components for cleaner, maintainable code.</li>
             <li><b>Modern Styling:</b> Used Tailwind CSS for a clean and responsive user interface.</li>
             <li><b>Context Management:</b> Leveraged React Context API to manage the editor instance across components.</li>
           </ul>
            `
  })

  if (!editor) return null

  return (
    <TextEditorContext.Provider value={{ editor }}>
      {children}
    </TextEditorContext.Provider>
  )
}
