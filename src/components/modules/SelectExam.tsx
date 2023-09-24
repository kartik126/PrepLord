"use client";
import { primary_color } from "@/utils/Colors";
import React, { useEffect, useState } from "react";
import upsc from "../../../public/pngwing.com (1).png";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { exams, myExam } from "@/recoil/store";

interface examInterface {
  _id: string;
  name: string;
}

function SelectExam() {
  const exam = useRecoilValue(exams);

  const [examId, setexamId] = useState("");
  useEffect(() => {
    const selectedExamId: any = localStorage.getItem("myExamId");
    setexamId(selectedExamId);
  }, [examId]);

  return (
    <>
      {examId && (
        <div className="w-[100%] px-10 rounded-lg m-4">
          <h1 className="text-3xl text-gray-700 text-center font-light">
            Choose Your{" "}
            <span className="font-normal" style={{ color: primary_color }}>
              Exam
            </span>{" "}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gapx-2">
            {exam.map((key: examInterface, index) => {
              const id = key._id;
              return (
                <div key={index} className="flex flex-row justify-center py-10 cursor-pointer">
                  <div
                    className="w-[170px] h-[170px] bg-white py-5 rounded-[15px] flex flex-col justify-between items-center border border-1 shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
                    style={{
                      border:
                        id === examId
                          ? `2px solid ${primary_color}`
                          : "",
                    }}
                  >
                    <div className="bg-gray-100 rounded-full px-3 py-3">
                      <Image
                        className="mx-2"
                        src={upsc}
                        alt="exam logo"
                        width={20}
                      />
                    </div>
                    <p className="text-lg font-semibold">{key.name}</p>
                    <button className="text-white px-3 py-1 rounded-lg bg-yellow-400 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default SelectExam;
