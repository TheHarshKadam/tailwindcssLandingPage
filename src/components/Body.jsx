import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='lg:order-2 lg:flex-1 flex justify-center items-center md:flex lg:justify-end lg:py-1'>
        <img className='md:h-[500px] lg:h-[500px] md:justify-center' src="./src/assets/bodyImg.png" alt="bodyImage" />
      </div>
      <div className='lg:order-1 lg: flex-1 lg:py-12'>
        <h1 className='text-5xl font-natoSansKorean font-bold leading-tight text-slate-200 pb-4 lg:pb-7'>Enjoying Space Like Never Before</h1>
        <p className='text-xl text-slate-200 font-poppins pb-5 lg:pb-7'>
          Explore the Universe with interactives and Videos galaxies, 
          and Universe, giving opportunity to experience space and Earth as seen with satellites
        </p>
        <button className='bg-myOrange px-9 py-3 text-lg font-poppins text-white rounded-full'>Join Us!  ➜</button>
      </div>
    </div>
  )
}

export default Body