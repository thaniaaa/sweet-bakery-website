import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUsDetail from './pages/AboutUsDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutUsDetail />
  </StrictMode>,
)
