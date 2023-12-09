import { MapPinIcon } from "@heroicons/react/20/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo-hindi-main.webp";
import { primary_color } from "@/utils/Colors";
import StarRating from "../elements/StarRatings";
import Loader from "@/app/institutes/Loader";

interface institutesInterface {
  name: string;
  image_url: string;
  phone: string;
  courses: string;
  gallery: string[];
  language: string;
  locality: string;
  address: string;
  lattitude: string;
  longitude: string;
  price: string;
  city: string;
  class_mode: string;
  rating: string;
  isLoading: boolean;
}

function InstituteCard({
  name,
  image_url,
  address,
  city,
  rating,
  isLoading,
}: institutesInterface) {

  return (
    <>
      <div className="relative cursor-pointer w-100 sm:w-3/4 h-fit p-2 py-3 flex flex-row border-[1.5px] border-gray-300 rounded-lg shadow-md hover:shadow-lg mb-5">
        <div className="h-100">
          <Image
            src={image_url}
            width={200}
            height={200}
            alt="coaching logo"
            className="h-[100%]"
          />
        </div>
        <div className="flex flex-col justify-between pl-3">
          <p className="font-semibold text-xl text-gray-700">{name}</p>
          <StarRating newRating={rating} />
          <div className="flex flex-row items-center pt-2">
            <MapPinIcon className="w-10 text-red-500" />
            <p className="text-xs text-gray-500 font-semibold">{address}</p>
          </div>
          <button
            className="mt-3 w-fit text-xs flex flex-row items-center text-white px-3 py-2 rounded-full"
            style={{ background: primary_color }}
          >
            <PhoneIcon className="w-4 mr-1 " /> Contact
          </button>
        </div>
      </div>
      </>
  );
}

export default InstituteCard;
