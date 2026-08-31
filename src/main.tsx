import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './Components/Navbar.tsx'
import Section from './Components/Section.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <main className='flex flex-col'>
     <Navbar />
     <Section />
    <App />
   </main>
  </StrictMode>,
)
