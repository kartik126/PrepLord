import React from 'react'
import illustration from '../../../public/home page illustrations/Knowledge-rafiki.png'
import Image from 'next/image'
import Button from '../elements/Button'

function EnquiryBanner() {
  return (
    <div className="bg-blue-100 h-fit mt-20 px-40 flex md:flex-row lg:flex-row flex-col items-center justify-between">
      <div className='flex flex-col'>
    <h1 className='text-5xl font-bold text-gray-700 '>LEADING THE WAY<br/> IN PREPAREDNESS AND <br/>EXCELLENCE</h1>
    <p className='text-gray-700 py-5 text-lg'> FILL ENQUIRY FORM TO GET OUR FREE CONSULTATION</p>
    <Button text={'Enquiry Now'}/>
    </div>
    <div>
    <Image src={illustration} alt='' width={400} className=''/>
    </div>
  </div>
  )
}

export default EnquiryBanner