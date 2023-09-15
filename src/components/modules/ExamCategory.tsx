import Image from 'next/image';
import React from 'react';

interface ExamProps{
  image: any;
  title: string;
}

const ExamCategory = ({ image, title }:ExamProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
        <Image src={image} alt={title} className="object-cover object-center" width={50} height={50}/>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCategory;
