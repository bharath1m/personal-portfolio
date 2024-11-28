import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hobbies from './components/Hobbies'
import './App.css'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Technologies/>
      <Projects/>
      <Education/>
      <Contact/>
      <Hobbies/>
      <Footer/>
    </div>
  )
}

export default App
