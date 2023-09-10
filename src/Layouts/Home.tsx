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

const instituteInfo = {
  name: "Sample Institute",
  location: "Sample Location",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit vel arcu bibendum gravida. Sed vel finibus metus, in placerat nunc.",
};

function Home() {
  return (
    <>
      <Header />

      <SearchBanner />

      <div className="flex flex-row w-100">
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

      <div className="" style={{ padding: "8% 10%" }}>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl text-gray-700 text-left font-light text-left ">
            Popular Institutes in{" "}
            <span className="font-normal" style={{ color: primary_color }}>
              Your City
            </span>{" "}
          </h1>
          <Button text={"View All"} />
        </div>
        <div className="flex flex-row justify-between py-10">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </div>
      </div>
      <EnquiryBanner />

      <Footer />
    </>
  );
}

export default Home;
