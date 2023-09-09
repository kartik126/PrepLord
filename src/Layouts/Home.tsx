import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import SearchBanner from "@/components/modules/SearchBanner";
import SelectExam from "@/components/modules/SelectExam";
import React from "react";

function Home() {
  return (
    <>
      <Header/>
      <SearchBanner/>
      <SelectExam/>
      <Footer/>
    </>
  );
}

export default Home;
