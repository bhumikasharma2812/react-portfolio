import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Mywork from './Components/my work/Mywork'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact/>
    </div>
  )
}

export default App
