import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import SearchBanner from "@/components/modules/SearchBanner";
import SelectExam from "@/components/modules/SelectExam";
import AdSpace from "@/components/modules/adSpace";
import React from "react";

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
      <div className="flex flex-row">
      <div className="px-10 w-[30%] flex items-center justify-center "   style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#F6F8F9 100%)" }}>
          <AdSpace institute={instituteInfo} />
        </div>
        <SelectExam />
      
      </div>
      <Footer />
    </>
  );
}

export default Home;
