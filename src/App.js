import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePages from './pages/HomePages'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'


const App = () => {
  return (
    <div>
    <Navbar/>
    <HomePages/>
    <AboutPage/>
    <SkillsPage/>
    <ProjectPage/>
    <ContactPage/>
    <Footer/>
    </div>
  )
}

export default App