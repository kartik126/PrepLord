import Home from "@/Layouts/Home";
import React, { useEffect } from "react";
import apiClient from "@/utils/apiClient";
import { useRecoilState, useSetRecoilState } from "recoil";
import { exams } from "@/recoil/store";

async function getData() {
  const res = await apiClient.get(`${apiClient.Urls.getExams}`);
  const data = res.data;
  return data;
}

export default async function page() {
  const data = await getData();

  return <>{data && <Home data={data} />}</>;
}
