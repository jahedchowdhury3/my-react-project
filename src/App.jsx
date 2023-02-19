import React from 'react'
import { Hero, Navbar, Companies, Courses, Achivement, Categories } from './components'
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

    </div>
  )
}

export default App