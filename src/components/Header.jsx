import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-3'>
            <img src="./src/assets/logo.png" alt="logo" style={{ width: '35px', height: 'auto' }} />
            <button className='text-slate-200 text-xl font-bold font-trispace'>Space Spark!</button>
        </div>
        <div>
          <FaBars size={35} className='text-slate-200'/>
        </div>
    </div>
  )
}

export default Header