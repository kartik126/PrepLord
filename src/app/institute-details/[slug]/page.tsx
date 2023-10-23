"use client"

import React from "react";
import Header from "../../../components/modules/Header";
import StarRating from "@/components/elements/StarRatings";


function page({ params }: { params: { slug: string } }) {
  return <>
  <Header/>
  <div style={{ paddingTop: "6%" }}>
    <div>
    <h1 className="text-3xl">{params.slug}</h1>
    <StarRating newRating={5} />

    </div>
  </div>
  </>;
}

export default page;
