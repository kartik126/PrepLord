import React from "react";
import { types } from "util";

interface InstituteInfo {
  name: string;
  location: string;
  description: string;
}

interface AdSpaceProps {
  institute: InstituteInfo;
}

function AdSpace({institute}:AdSpaceProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 m-4">
      <h2 className="text-2xl font-semibold">{institute.name}</h2>
      <p className="text-gray-600">{institute.location}</p>
      <div className="mt-4">
        <p className="text-lg font-semibold">About Us</p>
        <p className="text-gray-700">{institute.description}</p>
      </div>
    </div>
  );
}

export default AdSpace;
