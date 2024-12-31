import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TextEditorProvider } from './components/context/TextEditorProvider.jsx'

createRoot(document.getElementById('root')).render(
  <TextEditorProvider>
    <App />
  </TextEditorProvider>
)
