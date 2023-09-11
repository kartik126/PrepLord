import React from 'react';
import Image from 'next/image';

function ExamCard({ exam }) {
    return (
        <div className='w-[170px] h-[170px] border bg-[#fff] relative rounded-md group overflow-hidden'>
            <div className="py-10 flex items-center justify-center">
                <h3 className="text-black text-1xl align-center font-medium">{exam}</h3>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-10 bg-[#205383]  flex items-center justify-center">
                <h3 className="text-white text-sm font-regular">
                    Previous Question Paper
                </h3>
            </div>
        </div>
    );
}

export default ExamCard;
