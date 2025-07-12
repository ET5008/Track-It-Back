import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import DemoCard from "./components/DemoCard"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Nav />
      <main className='bg-[#cccccc]'>
        <Hero />
        <About />
        <DemoCard />
        <Footer />
      </main>
    </>
  )
}

export default App
