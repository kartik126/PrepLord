"use client";
import AdSpace from "@/components/modules/AdSpace";
import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import SearchBanner from "@/components/modules/SearchBanner";
import SelectExam from "@/components/modules/SelectExam";
import img1 from "../../public/home slider/White Blue Professional Website Developer LinkedIn Banner.png";

import React, { useEffect } from "react";
import Image from "next/image";
import { primary_color } from "@/utils/Colors";
import Button from "@/components/elements/Button";
import CityCard from "@/components/modules/CityCard";
import EnquiryBanner from "@/components/modules/EnquiryBanner";
import delhi from "../../public/cities/delhi.jpeg";
import mumbai from "../../public/cities/mumbai.jpeg";
import chandigarh from "../../public/cities/chandigarh.jpeg";
import ExamCard from "@/components/modules/ExamCard";
import Modal from "@/components/modules/Modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Slider from "@/components/modules/Slider";
import { exams } from "@/recoil/store";
import { signIn, signOut, useSession } from "next-auth/react";

const instituteInfo = {
  name: "Sample Institute",
  location: "Sample Location",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit vel arcu bibendum gravida. Sed vel finibus metus, in placerat nunc.",
};

const cities = [
  { name: "Delhi", image: delhi },
  { name: "Mumbai", image: mumbai },
  { name: "Chandigarh", image: chandigarh },
  { name: "Mumbai", image: mumbai },
  { name: "Delhi", image: delhi },
];

const examsData = [
  { name: "UGC NET", image: "https://www.careerwill.com/images/exam1.png" },
  { name: "SSC JE", image: "https://www.careerwill.com/images/exam6.png" },
  { name: "SBI CLERK", image: "https://www.careerwill.com/images/exam2.png" },
  {
    name: "RBI ASSISTANT",
    image: "https://www.careerwill.com/images/exam3.png",
  },
  { name: "RRB JE", image: "https://www.careerwill.com/images/exam4.png" },
  { name: "IBPS SO", image: "https://www.careerwill.com/images/exam5.png" },
  { name: "BPSC EXAM", image: "https://www.careerwill.com/images/exam7.png" },
  {
    name: "INDIAN NAVY SSR",
    image: "https://www.careerwill.com/images/exam8.png",
  },
  { name: "UPSSSC VDO", image: "https://www.careerwill.com/images/exam9.png" },
  {
    name: "INDIAN NAVY CHARGEMAN",
    image: "https://www.careerwill.com/images/exam11.png",
  },
  {
    name: "DFCCIL EXECUTIVE",
    image: "https://www.careerwill.com/images/exam12.png",
  },
  { name: "EMRS TGTR", image: "https://www.careerwill.com/images/exam10.png" },
];

const examCategories = [
  { title: "Category 1", image: "category1.jpg" },
  { title: "Category 2", image: "category2.jpg" },
  { title: "Category 3", image: "category3.jpg" },
  // Add more categories as needed
];
function Home({ data }: any) {
  const setExams = useSetRecoilState(exams);

  useEffect(() => {
    setExams(data);
  }, []);
  return (
    <>
      <Modal />
      <Header />
      <div style={{ paddingTop: "6%" }}>
        <SearchBanner />
        <div className="flex flex-col md:flex-row w-100 px-10 pt-20">
          <div className="flex items-center justify-center w-[30%] hidden sm:block">
            <AdSpace institute={instituteInfo} />
          </div>
          <div className="flex justify-center w-[100%] sm:w-[70%]">
            <SelectExam />
          </div>
        </div>
        <Slider />

        <div className="" style={{ padding: "6% 10%" }}>
          <div className="flex flex-row justify-between items-center ">
            <h1 className="text-3xl text-gray-700 text-left font-light text-left ">
              Popular Institutes in{" "}
              <span className="font-normal" style={{ color: primary_color }}>
                Your City
              </span>{" "}
            </h1>
            <Button text={"View All"} link="/institutes" />
          </div>
          <div className="flex flex-row justify-between py-10 overflow-x-auto">
            {cities.map((city, index) => (
              <CityCard key={index} city={city} />
            ))}
          </div>
        </div>
        <div className="" style={{ padding: "6% 10%" }}>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl text-gray-700 text-left font-light text-left ">
              Prepare yourself for{" "}
              <span className="font-normal" style={{ color: primary_color }}>
                Competitive Exams
              </span>{" "}
            </h1>
            <Button text={"View All"} link="" />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-0 pt-20">
            {examsData.map((exam, index) => (
              <div key={index}>
                <ExamCard exam={exam} />
              </div>
            ))}
          </div>
        </div>
        <EnquiryBanner />
      </div>
      <Footer />
    </>
  );
}

export default Home;
