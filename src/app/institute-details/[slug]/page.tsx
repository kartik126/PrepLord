"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../components/modules/Header";
import StarRating from "@/components/elements/StarRatings";
import apiClient from "@/utils/apiClient";

export default function InstituteDetail({ params }: { params: { slug: string } }) {
  const [institute, setinstitute] = useState([]);

  const getInsituteDetail = async () => {
    try {
      const res = await apiClient.get(
        `${apiClient.Urls.getInstituteDetails}/${params.slug}`
      );
      const data = res.data;
      console.log(data);
      setinstitute(data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  useEffect(() => {
    getInsituteDetail();
  }, [institute]);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "6%" }}>
        <div>
          <h1 className="text-3xl">{params.slug}</h1>
          <StarRating newRating={5} />
        </div>
      </div>
    </>
  );
}
