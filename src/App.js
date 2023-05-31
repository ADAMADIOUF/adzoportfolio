import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePages from './pages/HomePages'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'

import CustomCursor from './components/CustomCursor'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
     <CustomCursor/>
      <HomePages />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
      
      <Footer />
    </BrowserRouter>
  )
}

export default App