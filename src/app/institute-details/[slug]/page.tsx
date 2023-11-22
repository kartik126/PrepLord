"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../components/modules/Header";
import StarRating from "@/components/elements/StarRatings";
import apiClient from "@/utils/apiClient";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Gallery from "@/components/modules/ImageGallery";
import Footer from "@/components/modules/Footer";
import EnquiryForm from "@/components/layouts/EnquiryForm";
import EnquiryFormStatic from "@/components/modules/EnquiryFormStatic";

interface Institute {
  image_url: string;
  link: string;
  name: string;
  address: string;
  courses: string;
  gallery: string;
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

  const [institute, setinstitute] = useState<Institute | null>(null);

  console.log(searchParams);

  const getInsituteDetail = async (slug: any) => {
    try {
      const res = await apiClient.get(
        `${apiClient.Urls.getInstituteDetails}/${slug}`,
        { cache: "force-cache" }
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
      <div className="flex flex-row px-10 pt-20 bg-[#eee]">
        {/* {institute?.gallery && (
          <ImageSlider galleryImages={institute?.gallery} />
        )} */}
        <div className="w-[70%]">
          <div className="mt-10 py-10 bg-[#fff]" >
            {institute?.gallery && (
              <Gallery galleryImages={institute?.gallery} />
            )}
          </div>
          <div className="flex flex-row py-10 px-10 border-2 rounded-lg mt-10 bg-[#fff]">
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
              <div className="flex">
                {institute?.courses.split(",").map((key,index) => {
                  return (
                    <p key={index} className="px-4 py-1 border-1 border border-gray-300 w-fit rounded-full bg-gray-200 text-sm mr-2 mt-5">
                      {key}
                    </p>
                  );
                })}
              </div>
              <div className="flex mt-7">
                <button className="flex flex-row items-center py-2 px-10 mr-7 bg-green-400 text-xl text-white rounded-lg">
                  Contact
                </button>
                <button className="flex flex-row items-center py-2 px-10 bg-blue-500 text-xl text-white rounded-lg">
                  Enquiry
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-10 px-10 border-2 rounded-lg mt-10 mb-10 bg-[#fff]">
            <h1 className="pb-2 text-3xl font-bold">About {institute?.name}</h1>
            <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sapien urna. Cras dignissim nisi id mi convallis, feugiat tincidunt nibh tempor. Fusce varius purus eros, luctus molestie sapien aliquam vel. Integer vitae ante sit amet sem pulvinar tincidunt. Mauris maximus leo elit. Integer mollis gravida enim, nec auctor tellus tincidunt in. Sed rutrum, ex ac imperdiet elementum, lectus ex tincidunt tortor, non tincidunt tortor nunc accumsan lacus. Aliquam maximus iaculis pellentesque. Suspendisse potenti. Praesent laoreet ex at ante euismod, at auctor tortor egestas. Mauris sollicitudin congue aliquet. Morbi ligula lectus, pulvinar sed eleifend at, finibus eu mauris. Sed est orci, bibendum id velit quis, eleifend sollicitudin eros. Sed lacinia consequat dui at rutrum</p>
          </div>
        </div>
        <div className="w-[30%] ">
        <EnquiryFormStatic/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
