import React from 'react'
import "../styles/Footer.css"
import logo from "../assets/logo.svg";
import whatsapp from "../assets/whatsapp.svg"
import tokopedia from "../assets/tokopedia.svg"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-Container'>
        <div className='row-1'>
          <div className='logo2'>
            <img className="logo" src={logo} alt="" />
            <p className="text-xl font-bold text-white">LOGO</p>
          </div>
          <p className='textfooter'>Copyright reserved 2023 Link Data Technology</p>
          <div className='social-media-links'>
            <div className='tokopedia'>
              <a href=""><img className="tokped" src={tokopedia} alt="" /></a>
            </div>
            <div className='whatsapp'>
              <a href=""><img className="wa" src={whatsapp} alt="" /></a>
            </div>
          
          </div>
        </div>
        <div className='row-2'>
          <div className='column-1'>
            <a href="">Whatsapp</a>
            <a href="">Tokopedia</a>
            <a href="">Gmail</a>
          </div>
          <div className='column-2'>
            <a href="">Tentang Kami</a>
            <a href="">Contact</a>
            <a href="">Product</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer