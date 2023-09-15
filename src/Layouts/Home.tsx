import AdSpace from "@/components/modules/AdSpace";
import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import SearchBanner from "@/components/modules/SearchBanner";
import SelectExam from "@/components/modules/SelectExam";
import img1 from "../../public/home slider/White Blue Professional Website Developer LinkedIn Banner.png";

import React from "react";
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
import { useRecoilValue } from "recoil";
import Slider from "@/components/modules/Slider";

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
const exams = [
  "UGC NET",
  "SSC JE",
  "SBI CLERK",
  "RBI ASSISTANT",
  "RRB JE",
  "IBPS SO",
  // "BPSC EXAM",
  // "INDIAN NAVY SSR",
  // "UPSSSC VDO",
  // "INDIAN NAVY CHARGEMAN",
  // "DFCCIL EXECUTIVE",
  // "EMRS TGTR"
];
const examCategories = [
  { title: 'Category 1', image: 'category1.jpg' },
  { title: 'Category 2', image: 'category2.jpg' },
  { title: 'Category 3', image: 'category3.jpg' },
  // Add more categories as needed
];
function Home() {
  return (
    <>
      <Modal />
      <Header />
      <div style={{ paddingTop: "6%" }}>
        <SearchBanner />
        <div className="flex flex-row w-100 pt-20">
          <div
            className="flex items-center justify-center "
            style={{ width: "30%" }}
          >
            <AdSpace institute={instituteInfo} />
          </div>
          <div className=" flex justify-center" style={{ width: "70%" }}>
            <SelectExam />
          </div>
        </div>
        <Slider />

        <div className="" style={{ padding: "6% 10%" }}>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl text-gray-700 text-left font-light text-left ">
              Popular Institutes in{" "}
              <span className="font-normal" style={{ color: primary_color }}>
                Your City
              </span>{" "}
            </h1>
            <Button text={"View All"} link="/institutes" />
          </div>
          <div className="flex flex-row justify-between py-10">
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
          <div className="flex flex-row justify-between py-10">
            {/* Examss card */}
            {exams.map((exam, index) => (
              <div key={index} className="flex flex-row justify-between py-10">
                <ExamCard key={index} exam={exam} />
              </div>
            ))}
          </div>
          <div
            className="flex flex-row justify-between"
            style={{ marginTop: "-70px" }}
          >
            {/* Examss card */}
            {exams.map((exam, index) => (
              <div key={index} className="flex flex-row justify-between py-10">
                <ExamCard key={index} exam={exam} />
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
