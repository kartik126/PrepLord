import React from 'react';
import { primary_color } from "@/utils/Colors";
import preplordLogo from "../../../public/logo/logo.png";
import Image from "next/image";

const exams = [
  "UGC NET",
  "SSC JE",
  "SBI CLERK",
  "RBI ASSISTANT",
  "RRB JE",
  "IBPS SO",
  "BPSC EXAM",
  "INDIAN NAVY SSR",
  "UPSSSC VDO",
  "INDIAN NAVY CHARGEMAN",
  "DFCCIL EXECUTIVE",
  "EMRS TGTR"
];

const previousYearPapers = [
  "UPSC CSE PREVIOUS YEAR PAPERS",
  "RRB OFFICE ASSISTANT PREVIOUS YEAR PAPERS",
  "SSC CHSL PREVIOUS YEAR PAPERS",
  "AFCAT PREVIOUS YEAR PAPERS",
  "MAHARASHTRA FOREST GUARD PAPERS",
  "CSIR NET PREVIOUS YEAR PAPERS",
  "SSC HAVALDAR PREVIOUS YEAR PAPERS",
  "EPFO SSA PREVIOUS YEAR PAPERS",
  "SSC JE EE PREVIOUS YEAR PAPERS"
];

function Footer() {
  return (
    <div>
      <div style={{ paddingLeft: '90px', paddingBottom: '50px', backgroundColor: primary_color, paddingTop: '50px', minHeight: '80vh' }}>
        <div >
          <h3 className="text-2xl text-white text-left font-medium pb-5">
            EXAMS
          </h3>
          <div className='flex space-x-20'>
            <div className="text-white">
              {exams.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-1 text-sm font-regular' key={index}>{exam}</p>
              ))}
            </div>
            <div className="text-white">
              {exams.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-1 text-sm font-regular pl-10' key={index}>{exam}</p>
              ))}
            </div><div className="text-white">
              {exams.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-1 text-sm font-regular pl-10' key={index}>{exam}</p>
              ))}
            </div><div className="text-white ">
              {exams.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-1 text-sm font-regular pl-10' key={index}>{exam}</p>
              ))}
            </div>
          </div>
        </div>

        <div >
          <h3 className="text-2xl text-white text-left font-medium pt-10 pb-5">
            PREVIOUS YEARS PAPERS
          </h3>
          <div className='flex space-x-10'>
            <div className="text-white">
              {previousYearPapers.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-2 text-sm font-regular' key={index}>{exam}</p>
              ))}
            </div>
            <div className="text-white">
              {previousYearPapers.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-2 text-sm font-regular pl-10' key={index}>{exam}</p>
              ))}
            </div><div className="text-white">
              {previousYearPapers.map((exam, index) => (
                <p className='cursor-pointer hover:underline pb-2 text-sm font-regular pl-10' key={index}>{exam}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Information footer */}
<div className="bg-gray-800">
  <div className="flex flex-row  border-b border-gray-200" style={{ marginLeft: '90px', paddingBottom: '50px', paddingTop: '50px', minHeight: '30vh' }}>
    <div>
      <Image
        className=""
        src={preplordLogo}
        width={180}
        alt="preplord logo"
      />
    </div>
    <div className="pl-20">
      <h3 className="text-1xl text-white text-left font-medium pb-2">
        Company
      </h3>
      <p className="pb-1 text-sm text-white font-regular">
        About Us
      </p>
      <p className="pb-1 text-sm text-white font-regular">
        Privacy Policy
      </p>
      <p className="pb-1 text-sm text-white font-regular">
        Terms & Conditions
      </p>
      <p className="pb-1 text-sm text-white font-regular">
        Contact Us
      </p>
    </div>
    <div className="text-white pl-20">
      <h3 className="text-1xl text-white text-left font-medium pb-2">
        Follow Us
      </h3>
      {/* Add your social media icons or links here */}
    </div>
  </div>

  <p className="pb-5 pt-5 text-xs text-center text-gray-200 font-regular" style={{ marginLeft: '90px' }}>
    Copyright © 2023 Preplord Edu Solutions Pvt. Ltd.: All rights reserved
  </p>
</div>

    </div>
  )
}

export default Footer;
