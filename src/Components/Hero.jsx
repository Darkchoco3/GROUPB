import React from 'react'
import '../Styles/Hero.css'
import Header from './Header'
import arrow from '../assets/images/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div className='m-hero'>
    <Header/>
        <div className="hero-content">
            <h1>WE ARE CREATIVES</h1>
            <img src={arrow}/>
        </div>
    </div>
  )
}

export default Hero
