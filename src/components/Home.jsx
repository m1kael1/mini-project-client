import React from 'react'
import ellipse from '../assets/ellipse.svg'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <section className='min-w-300 bg-green-500 w-full top-0 fixed left-0 h-16 bg-opacity-40 flex items-center justify-between'>
      <div className='h-full ml-10 flex justify-center items-center'>
        <img className='p-1' src={logo} alt="" /> <p className='text-xl font-bold text-white'>LOGO</p></div>
      <div className='ml-10 mr-10 w-96 h-full items-center flex justify-between'>
      <NavLink to='/' className='w-32 h-12 flex items-center justify-center font-normal text-white text-xs'>LAYANAN</NavLink>
        <NavLink to='/product' className='w-32 h-12 flex items-center justify-center font-normal text-white text-xs'>PRODUK</NavLink>
        <NavLink to='/contact' className='w-32 h-12 flex items-center justify-center font-normal text-white text-xs'>HUBUNGI KAMI</NavLink>
      </div>
      <div className='mr-10 h-full flex items-center'>
        <img className='m-auto w-10 h-10 min-w-10 min-h-10 min-w-40 min-h-40' src={ellipse} alt="" />
      </div>
    </section>

      {/* Slider */}
      <section>TEST HOME</section>

      {/* Brands-section */}
      <section></section>

      {/* Frame 10 - Frame 12 */}
      <section></section>

      {/* quotes-section */}
      <section></section>

      {/* footer-section */}
      <section></section>

    </div>
  )
}

export default Home