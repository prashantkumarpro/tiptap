import Heading from './Heading'
import Font from './Font'
import TextAlign from './TextAlign'
import ListItemBtns from './ListItemBtns'

const TextEditorToolbar = () => {
  return (
    <>
      <div className='toolbar max-w-3xl mx-auto my-0 p-4 flex items-center flex-wrap space-x-5 bg-gray-800 text-white px-4  shadow'>
        <Heading />
        <Font />
        <TextAlign />
        <ListItemBtns />
      </div>
    </>
  )
}

export default TextEditorToolbar
