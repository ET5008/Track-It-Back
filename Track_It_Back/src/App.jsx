import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Demo from "./Demo"
import Home from "./Home"

function App() {

  return (
    <>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/demo" element={<Demo />}/> 
      </Routes>
    </>
  )
}

export default App
