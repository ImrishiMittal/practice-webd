import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SHead from './SHead'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SHead/>
  </StrictMode>,
)
