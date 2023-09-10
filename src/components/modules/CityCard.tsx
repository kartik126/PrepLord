import React from 'react'
import delhi from '../../../public/cities/delhi.jpeg'
import Image from 'next/image'

function CityCard() {
  return (
    <div className='w-[220px] relative'>
      <Image src={delhi} alt='city image' className='rounded-lg absolute'/>
      <h1 className='absolute top-20 left-20 text-white font-bold text-2xl'>Delhi</h1>
    </div>
  )
}

export default CityCard