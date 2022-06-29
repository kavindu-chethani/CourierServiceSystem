import React from 'react'
import logo from "../../images/logo.png"

const Header = () => {
  return (
  
  <div>
    
    {/* <!--=============== HEADER ===============--> */}
    <header className="header" id="header">
        <nav className="nav container">
            <a href="/" className="nav__logo"><img className="Home-logo" src={logo} alt="logo"/>  BY THE MINUTE</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About us</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">Services</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact us</a>
                    </li>

                    <i className='bx bx-toggle-left change-theme' id="theme-button"></i>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-grid-alt'></i>
            </div>

            <a href="/signin" className="button button__header">Sign In</a>
        </nav>
    </header>
    
  </div>
  
  )
}

export default Header
