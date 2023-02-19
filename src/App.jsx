import React from 'react'
import { Hero, Navbar, Companies, Courses, Achivement, Categories, Feedback, CTA, Footer } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Courses/>
      <Achivement/>
      <Categories/>
      <Feedback/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App