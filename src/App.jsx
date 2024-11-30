
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import WorkingStep from './components/WorkingStep'
import Contact from './components/Contact'

function App() {
  

  return (
    <div className='font-primary overflow-y-hidden'>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <WorkingStep/>
    <Pricing/>
    <Testimonial/>
    <Contact/>
    
    </div>
  )
}

export default App
