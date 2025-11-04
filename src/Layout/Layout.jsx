import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Layout() {
  return (
 <>
    <Header/>
    <Hero/>
        <About/>

    <Projects/>
    <Contact/>
    <Footer/>
 </>
  )
}
