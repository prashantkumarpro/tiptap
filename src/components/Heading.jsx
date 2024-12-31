import { useContext, useState } from 'react'
import { TextEditorContext } from './context/TextEditorContext'

const Heading = () => {
  const [selectedHeading, setSelectedHeading] = useState('')
  const { editor } = useContext(TextEditorContext)

  const handleHeadingChange = event => {
    const level = parseInt(event.target.value)
    setSelectedHeading(level)
    if (level) {
      editor.chain().focus().toggleHeading({ level }).run()
    }
  }
  return (
    <>
      <select
        value={selectedHeading}
        onChange={handleHeadingChange}
        className='bg-gray-700 text-white p-2 rounded'
      >
        <option value='' disabled>
          Select Heading
        </option>
        {[1, 2, 3, 4, 5, 6].map(level => (
          <option
            key={level}
            value={level}
            className={editor.isActive('heading', { level }) ? 'is-active' : ''}
          >
            H{level}
          </option>
        ))}
      </select>
    </>
  )
}

export default Heading
