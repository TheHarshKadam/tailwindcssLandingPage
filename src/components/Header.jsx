import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-3'>
            <img src="./src/assets/logo.png" alt="logo" style={{ width: '35px', height: 'auto' }} />
            <button className='text-slate-200 text-xl font-bold font-trispace'>Space Spark!</button>
        </div>
        <ul className='hidden lg:flex lg:ml-auto gap-6 lg:py-2 text-slate-200 text-xl font-bold font-trispace'>
          <li><a href="#">Profile</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Community</a></li>
        </ul>
        <div className='hidden lg:block ml-6 '>
        <button className='bg-myOrange px-5 py-2 text-lg font-poppins text-white rounded-full'>Join Us!</button>
        </div>
        <div className='lg:hidden'>
          <FaBars size={35} className='text-slate-200'/>
        </div>
    </div>
  )
}

export default Header