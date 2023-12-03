"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import upsc from "../../../public/pngwing.com (1).png";
import { primary_color } from "@/utils/Colors";
import Button from "../elements/Button";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { exams, myExam } from "@/recoil/store";

// const exams = ["UPSC", "GATE", "MBA", "JEE", "UPSC", "GATE", "MBA", "JEE"];

type SelectedExamIndex = number | null;

interface examInterface {
  name: string;
}

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedExamIndex, setSelectedExamIndex] =
    useState<SelectedExamIndex>(null);
  const setSelectedExam = useSetRecoilState(myExam);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("modalShown", "false");
  };

  const exam: any = useRecoilValue(exams);
  const selectedExam: any = useRecoilState(myExam);

  const handleExamClick = (index: number, exam_name: string) => {
    // localStorage.setItem("modalShown", "true");
    setSelectedExamIndex(index);
    setSelectedExam(exam[index]._id);
    localStorage.setItem("myExamId", exam[index]._id);
    localStorage.setItem("myExamName", exam_name);
    console.log(selectedExam);
  };

  useEffect(() => {
    console.log(selectedExam);
  }, [selectedExam]);

  const isModalShown = typeof window !== 'undefined' && localStorage.getItem("modalShown");

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10 ${
        isModalOpen && isModalShown === "true" ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <button
          onClick={closeModal}
          className="float-right text-gray-700 hover:text-gray-900"
        >
          &#x2715;
        </button>
        <h2 className="text-2xl font-normal mb-4 text-center">
          Choose Your Exam
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {exam.map((key: examInterface, index: number) => {
            return (
              <div
                key={index}
                className={`flex flex-row justify-center py-5 cursor-pointer `}
              >
                <div
                  className="w-fit h-fit bg-white py-2 px-10 rounded-[10px] flex flex-col justify-between	 items-center border border-1 shadow-lg"
                  style={{
                    border:
                      selectedExamIndex === index
                        ? `2px solid ${primary_color}`
                        : "",
                  }}
                  onClick={() => handleExamClick(index, key.name)}
                >
                  <div className="bg-gray-100 rounded-full p-1">
                    <Image
                      className="mx-2"
                      src={upsc}
                      alt="exam logo"
                      width={17}
                    />
                  </div>
                  <p className="text-lg font-semibold mt-2">{key.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-right mx-6">
          <button
            className="text-white p-3 px-7 rounded-lg"
            style={{ background: primary_color }}
            onClick={()=>closeModal()}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
