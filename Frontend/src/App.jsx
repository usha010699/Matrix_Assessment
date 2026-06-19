
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Framework from './components/Framework/Framework'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import './App.css'
import bgVideo from "./assets/1.mp4";



function App() {


  return (
    <> 
    <div className="background">
       <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>
    </div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Hero/>}>Home</Route>
      <Route path="/Services" element={<Services/>}>Services</Route>
      <Route path="/Framework" element={<Framework/>}>Framework</Route>
      <Route path="/Testimonials" element={<Testimonials/>}>Testimonials</Route>
      <Route path="/Contact" element={<Contact/>}>Contact</Route>

    </Routes>
      {/* <div>
        <h1>Hello Usha</h1>
      </div> */}
      <Footer/>
    </>
  )
}

export default App
