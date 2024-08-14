import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer " style={{backgroundColor:'hsl(180, 56%, 74%)'}}>
        <div className="">
            <h2 className='text-cyan footer-head' >sunnyside</h2>
            
                <ul className='footer-nav fw-700 ' style={{fontFamily:'Barlow'}}>
                    <li className=''><a href="" style={{textDecoration:'none'}} className='text-cyan-footer footer-navs'>About</a></li>
                    <li className=''><a href="" style={{textDecoration:'none'}} className='text-cyan-footer footer-navs'>Services</a></li>
                    <li className=''><a href="" style={{textDecoration:'none'}} className='text-cyan-footer footer-navs'>Projects</a></li>
                </ul>
           
            <div className='footer-icons'>
                <a href="" className='text-cyan-footer'><AiFillFacebook size={25} className='footer-icon'/></a>
                <a href="" className='text-cyan-footer'><IoLogoInstagram size={25} className='footer-icon'/></a>
                <a href="" className='text-cyan-footer'><IoLogoTwitter size={25} className='footer-icon'/></a>
                <a href="" className='text-cyan-footer'><FaPinterest size={25} className='footer-icon'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer