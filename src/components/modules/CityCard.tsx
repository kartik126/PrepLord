import React from "react";
import Image from "next/image";
import Link from "next/link";

interface cityInfo {
  image: string;
  name: string;
}

interface cityProps {
  city: cityInfo;
}

function CityCard({ city, key }: any) {
  const lowercaseCityyName =
    city.name.toLowerCase();
  return (
    <Link key={key} href={{
      pathname: `/institutes/${lowercaseCityyName}`,
      query: {
        city: city.name,
      },
    }}>
      <div className="shadow-md mx-3 cursor-pointer relative w-[150px] md:w-[180px] h-[230px] rounded-lg group overflow-hidden">
        <div className="relative w-full h-full transition-transform transform-gpu group-hover:scale-105">
          <Image
            src={city.image}
            alt="city image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-2xl font-medium">{city.name}</h3>

        </div>
      </div>
    </Link>
  );
}

export default CityCard;
