"use client";
import React from "react";
import Header from "../../../components/modules/Header";
import CategoryFilter from "@/components/modules/CategoryFilter";
function page({params}:{params:{slug:string}}) {
  return (
    <>
      <Header />
      <div>{params.slug} Insitutes....</div>
    </>
  );
}

export default page;
