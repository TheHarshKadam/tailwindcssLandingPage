import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4'>
      <div>
        <img className='md:size-95' src="./src/assets/bodyImg.png" alt="bodyImage" />
      </div>
      <div>
        <h1 className='text-5xl font-natoSansKorean font-bold leading-tight text-slate-200 pb-4'>Enjoying Space Like Never Before</h1>
        <p className='text-xl text-slate-200 font-poppins pb-5'>
          Explore the Universe with interactives and Videos galaxies, 
          and Universe, giving opportunity to experience space and Earth as seen with satellites
        </p>
        <button className='bg-myOrange px-9 py-3 text-lg font-poppins text-white rounded-full'>Join Us!  ➜</button>
      </div>
    </div>
  )
}

export default Body