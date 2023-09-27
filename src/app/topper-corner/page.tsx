"use client";
import React from "react";
import Header from "../../components/modules/Header";
import topIcon from "../../../public/top-rated.png";
import Image from "next/image";
import TopperCard from "@/components/modules/TopperCard";
import Footer from "@/components/modules/Footer";
import { exams, myExam } from "@/recoil/store";
import { useExams } from "@/hooks/useExams";
import { useInstitutes } from "@/hooks/useInstitutes";

interface examInterface {
  _id: string;
  toppers: any[];
}

export default function Page() {

  // const selectedExam = localStorage.getItem("myExamId");

  const getExams = useExams();

  return (
    <>
      <Header/>
      <div style={{ paddingTop: "6%" }}>
        <div className="h-40 bg-gradient-to-r from-green-200 via-purple-200 to-blue-400 flex flex-row items-center justify-center">
          <Image src={topIcon} alt="" width={60} />
          <h1 className="text-4xl font-bold text-gray-700 text-center">
            TOPPER&apos;S CORNER
          </h1>
        </div>
        <div className="md:w-[80%] lg:w-[70%] w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-10">
            {/* {getExams
              .filter((data: examInterface) => data._id === selectedExam)
              .map((filteredData: examInterface) =>
                filteredData?.toppers?.map((topper) => (
                  <TopperCard key={topper.id} {...topper} />
                ))
              )} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
