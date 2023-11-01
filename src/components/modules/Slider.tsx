"use client";
import Image from "next/image";
import React from "react";
import banner1 from "../../../public/banner2.png";



function Slider() {
  return (
    <div className="pt-20 cursor-pointer">
      <Image src={banner1} className="w-[100%]" alt="" />
    </div>
  );
}

export default Slider;
