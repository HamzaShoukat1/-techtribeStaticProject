import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Section from './Components/Section.tsx'
import OurClient from './Components/OurClient.tsx'
import CommunitySection from './Components/CommunitySection.tsx'
import ShowOffSection from './Components/ShowOffSection.tsx'
import Results from './Components/Results.tsx'
import MakeDesign from './Components/MakeDesign.tsx'
import Details from './Components/Details.tsx'
import Docs from './Components/Docs.tsx'
import Demo from './Components/Demo.tsx'
import Footer from './Components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='flex flex-col min-h-screen'>

      <div className='flex-1 flex flex-col gap-10'>
        <Section />
        <OurClient />
        <CommunitySection />
        <ShowOffSection />
        <Results />
        <MakeDesign />
        <Details />
        <Docs />
        <Demo />
      </div>

      <Footer />

      <App />
    </main>
  </StrictMode>,
)
