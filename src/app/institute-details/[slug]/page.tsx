"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../components/modules/Header";
import StarRating from "@/components/elements/StarRatings";
import apiClient from "@/utils/apiClient";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

interface Institute {
  image_url: string;
  link: string ;
  name: string;
  address: string;

}

interface ApiResponse {
  institute: Institute;
}

export default function InstituteDetail({
  params,
}: {
  params: { slug: string };
}) {
  const searchParams = useSearchParams();

  const [institute, setinstitute] = useState<Institute | null>(null)

  console.log(searchParams);

  const getInsituteDetail = async (slug:any) => {
    try {
      const res = await apiClient.get(
        `${apiClient.Urls.getInstituteDetails}/${slug}`,{ cache: 'force-cache' }
      );
      const data = res;
      console.log("dataaaaa", res);
      setinstitute(data.institute);
    } catch (error) {
      console.error("Error fetching exams:", error);
      setinstitute(null);
    }
  };

  useEffect(() => {
    if (params.slug) {
      getInsituteDetail(params.slug);
    }
    console.log(institute);
  }, [params.slug]);

  return (
    <>
      <Header />
      <div className="px-10 pt-20">
        {/* {institute?.gallery && (
          <ImageSlider galleryImages={institute?.gallery} />
        )} */}
        <div className="flex flex-row py-10 px-10 border-2 rounded-lg mt-10">
          <div>
            <Image
              className="mr-7"
              src={institute?.image_url || ""}
              alt={`${institute?.name}-logo`}
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className="pb-2 text-3xl font-bold">{institute?.name}</h1>
            <p className="pb-2 text-gray-600">{institute?.address}</p>
            <StarRating newRating={5} />
            <button className="flex flex-row items-center py-3 px-10 mt-5 bg-green-400 text-xl text-white rounded-lg">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
