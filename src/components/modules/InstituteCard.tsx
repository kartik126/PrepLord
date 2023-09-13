import { MapPinIcon } from "@heroicons/react/20/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo-hindi-main.webp";
import { primary_color } from "@/utils/Colors";
import StarRating from "../elements/StarRatings";

function InstituteCard() {
  return (
    <div className="relative cursor-pointer w-3/4 h-fit p-2 flex flex-row border-[1.5px] border-gray-300 rounded-lg shadow-md hover:shadow-lg mb-5">
      <div className="w-[250px] h-100">
        <Image src={logo} alt="coaching logo" className="h-[100%]" />
      </div>
      <div className="flex flex-col justify-between pl-3">
        <p className="font-semibold text-xl text-gray-700">
          Drishti IAS Coaching in Delhi
        </p>
        <StarRating/>
        <div className="flex flex-row items-center pt-2">
          <MapPinIcon className="w-10 text-red-500" />
          <p className="text-xs text-gray-500 font-semibold">
            39 Reviews Shop No. 92/94 GROUND FLOOR, GTB nagar metro station The
            Mall Rd, Kingsway Camp Mukherjee Nagar New Delhi, New Delhi, Delhi,
            110009, IN
          </p>
        </div>
        <button
          className="mt-2 w-fit text-xs flex flex-row items-center text-white px-3 py-2 rounded-full"
          style={{background:primary_color}}
        >
          <PhoneIcon className="w-4 mr-1 " /> Contact
        </button>

      </div>
    </div>
  );
}

export default InstituteCard;
