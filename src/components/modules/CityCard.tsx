import React from 'react';
import Image from 'next/image';

function CityCard({ city }) {
  return (
    <div className='w-[180px] h-[230px] relative rounded-lg group overflow-hidden'>
      <Image src={city.image} alt='city image' className='absolute inset-0 w-full h-full rounded-lg' layout='fill' objectFit='cover' />
      <div className="absolute inset-x-0 bottom-0 h-full bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-2xl font-medium">{city.name}</h3>
      </div>
    </div>
  );
}

export default CityCard;
