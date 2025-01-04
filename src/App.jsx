import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
  

  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
