import { primary_color } from "@/utils/Colors";
import React from "react";
import upsc from "../../../public/pngwing.com (1).png";
import Image from "next/image";

function SelectExam() {
  return (
    <div className="w-[70%] py-10 px-10 m-5 rounded-lg" style={{background:'linear-gradient(180deg,#FFFFFF 0%,#F6F8F9 100%)'}}>
      <h1 className="text-4xl text-gray-700 text-left font-normal">
        Choose Your{" "}
        <span className="font-bold" style={{ color: primary_color }}>
          Exam
        </span>{" "}
      </h1>
      <div className="flex flex-row justify-between">
      <div className="flex flex-row justify-center py-10 cursor-pointer">
        <div className="w-[170px] h-[170px] py-5 rounded-[15px] flex flex-col justify-between items-center border border-1 shadow-lg">
          <div className="bg-gray-100 rounded-full px-3 py-3">
          <Image className="mx-2" src={upsc} alt="exam logo" width={20}/>
          </div>
          <p className="text-lg font-semibold">UPSC</p>
          <button className="text-white px-3 py-1 rounded-lg bg-green-400 text-sm">Learn More</button>
        </div>
      </div>
      <div className="flex flex-row justify-center py-10 cursor-pointer">
        <div className="w-[170px] h-[170px] py-5 rounded-[15px] flex flex-col justify-between items-center border border-1 shadow-lg">
          <div className="bg-gray-100 rounded-full px-3 py-3">
          <Image className="mx-2" src={upsc} alt="exam logo" width={20}/>
          </div>
          <p className="text-lg font-semibold">UPSC</p>
          <button className="text-white px-3 py-1 rounded-lg bg-yellow-400 text-sm">Learn More</button>
        </div>
      </div>
      <div className="flex flex-row justify-center py-10 cursor-pointer">
        <div className="w-[170px] h-[170px] py-5 rounded-[15px] flex flex-col justify-between items-center border border-1 shadow-lg">
          <div className="bg-gray-100 rounded-full px-3 py-3">
          <Image className="mx-2" src={upsc} alt="exam logo" width={20}/>
          </div>
          <p className="text-lg font-semibold">UPSC</p>
          <button className="text-white px-3 py-1 rounded-lg bg-blue-400 text-sm">Learn More</button>
        </div>
      </div>
      <div className="flex flex-row justify-center py-10 cursor-pointer">
        <div className="w-[170px] h-[170px] py-5 rounded-[15px] flex flex-col justify-between items-center border border-1 shadow-lg">
          <div className="bg-gray-100 rounded-full px-3 py-3">
          <Image className="mx-2" src={upsc} alt="exam logo" width={20}/>
          </div>
          <p className="text-lg font-semibold">UPSC</p>
          <button className="text-white px-3 py-1 rounded-lg bg-purple-400 text-sm">Learn More</button>
        </div>
      </div>
      <div className="flex flex-row justify-center py-10 cursor-pointer">
        <div className="w-[170px] h-[170px] py-5 rounded-[15px] flex flex-col justify-between items-center border border-1 shadow-lg">
          <div className="bg-gray-100 rounded-full px-3 py-3">
          <Image className="mx-2" src={upsc} alt="exam logo" width={20}/>
          </div>
          <p className="text-lg font-semibold">UPSC</p>
          <button className="text-white px-3 py-1 rounded-lg bg-pink-400 text-sm">Learn More</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default SelectExam;
