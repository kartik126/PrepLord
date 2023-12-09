import React from "react";
import ExamBroIllustration from "../../../public/search banner/Exams-bro.svg";
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import apiClient from "@/utils/apiClient";
import Link from "next/link";

function SearchBanner() {
  const [search, setsearch] = React.useState([]);
  const [showFetchResult, setshowFetchResult] = React.useState(false);

  async function fetchSearch(search: string) {
    setshowFetchResult(true);
    try {
      if (search.trim() === "") {
        // If the search input is empty, reset the search state
        setsearch([]);
        setshowFetchResult(false);
        return;
      }

      const res = await apiClient.post(`${apiClient.Urls.search}`, {
        search: search,
      });
      const data = res;
      setsearch(data.searchResult);
      console.log("data search result", data.searchResult);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  return (
    <div className="flex items-center justify-between bg-[#205383] h-[400px] px-10 text-white">
      <div className="flex flex-col w-100 sm:w-1/2">
        <h1 className="text-3xl font-[600]">
          YOUR PATH TO <br /> ACADEMIC EXCELLENCE STARTS HERE..
        </h1>
        <div className="pt-5 pb-5 px-5 bg-[#366a9a] rounded-[20px] mt-5 my-2">
          <p className="pb-2">Search Exam</p>
          <div className="relative ">
            <input
              onChange={(e) => fetchSearch(e.target.value)}
              type="text"
              placeholder="Search Exams..."
              className="w-full py-4 pl-10 pr-4 text-gray-900 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookOpenIcon className="text-gray-400 h-5" />
            </div>
            <div className="absolute inset-y-0 right-6 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="text-gray-400 h-5" />
            </div>
            <div>
              {showFetchResult &&
                search?.length > 0 &&
                search?.map((value: any) => {
                  return (
                    <div
                      key={value._id}
                      className="bg-white text-gray-700 absolute rounded-md w-[100%] p-4"
                    >
                      <Link href={`exams/${value.name}`}>
                        <p className="text-sm cursor-pointer">{value?.name}</p>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end block hidden sm:block">
        <Image
          src={ExamBroIllustration}
          width={380}
          alt=""
          className="animate-jump"
        />
      </div>
    </div>
  );
}

export default SearchBanner;
