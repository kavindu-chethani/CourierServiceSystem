import React from 'react'

import "./Home.css"

import Header from './Header'
import Footer from './Footer'
import Track from './Track'
import About from './About'
import Security from './Security'
import Services from './Services'
import AppStore from './AppStore'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Track/>
        <About/>
        <Security/>
        <Services/>
        <AppStore/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home