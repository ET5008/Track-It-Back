import Hero from "./components/Hero"
import About from "./components/About"
import DemoCard from "./components/DemoCard"
import Footer from "./components/Footer"
import { Gauge } from '@mui/x-charts/Gauge';


function Home() {

  return (
    <>
      <main className='bg-[#cccccc]'>
        <Hero />

        <About />
        <DemoCard />
        <Footer />
      </main>
    </>
  )
}

export default Home
