// "use client";
import Home from "@/Layouts/Home";
import React, { useEffect } from 'react';
import apiClient from "@/utils/apiClient";
import { useRecoilState, useSetRecoilState } from "recoil";
import { exams } from "@/recoil/store";
async function getData() {
  const res = await apiClient.get(`${apiClient.Urls.getExams}`);;

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
// console.log("resonse",res)
  const data = res.data;
  return data ;
}

export default async function page() {
  const data = await getData();  
  return (
    <>
      <Home data={data} />
    </>
  );
}