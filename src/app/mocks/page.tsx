"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/modules/Header";
import { primary_color } from "@/utils/Colors";
import Link from "next/link";
import apiClient from "@/utils/apiClient";
import MockTestCard from "@/components/modules/MockTestCard";
import Loader from "./Loader";
import { mock_types } from "../config/static";

interface Topic {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
  topics: Topic[];
}

interface Subject {
  _id: string;
  name: string;
  categories: Category[];
}

function Page() {
  interface TestData {
    title: string;
    exam: string;
    questions: any;
    durationInMinutes: number;
    max_marks: number;
    _id: number;
  }
  const [selectedType, setSelectedType] = useState("Full Syllabus");
  const [testsData, setTestsData] = useState<TestData[]>([]);
  const [exam, setexam] = useState("");
  const [subjects, setsubjects] = useState([]);
  const [subjectIndex, setsubjectIndex] = useState(0);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [subjectTitle, setsubjectTitle] = useState(null);
  const [mockType, setmockType] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setexam(exam_name);
    getSubjectList();
    getTestList("PREVIOUS YEAR QUESTIONS");
  }, []);

  const getTestList = async (subject: any) => {
    const exam: any = localStorage.getItem("myExamName");
    const title = subject;
    const mock_type = mockType;
    const queryString = `?exam=${exam}${title ? `&title=${title}` : ""}${
      mock_type ? `&mock_type=${mock_type}` : ""
    }`;
    try {
      setLoading(true);
      const res = await apiClient.get(
        `${apiClient.Urls.getTestList}${queryString}`
      );

      if (res.success) {
        console.log("dataaaaa", res);
        setTestsData(res.data);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
      //  setinstitute(null);
    } finally {
      setLoading(false);
    }
  };

  const getSubjectList = async () => {
    try {
      const res = await apiClient.get(`${apiClient.Urls.subjects}`);
      console.log("dataaaaa", res.data[0].categories);
      if (res.success) {
        setsubjects(res.data[0].categories);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleSubjectIndex = (index: number) => {
    setsubjectIndex(index);
  };

  const handleTopic = (topic: any) => {
    setsubjectTitle(topic);
    console.log("handleTopic", subjectTitle);
  };

  const handleMockType = (type: any) => {
    setmockType(type);
  };

  return (
    <>
      <Header />
      <div className="flex bg-white pt-20 px-20">
        <div className="w-90 pt-10">
          <div>
            <h1 className="font-medium text-2xl pt-3">
              Attempt {exam} Exams Mock Test
            </h1>
            <p>Start Your Free Mock Tests Here</p>
          </div>

          <div className="flex space-x-4 mt-4">
            {mock_types.map((type, ind) => {
              return (
                <div
                  className={`border  font-normal  rounded-full px-10 py-1 cursor-pointer ${mockType===type.value?'border-green-400 text-green-400 border-2':'border-gray-400 text-gray-400 border-1' }`}
                  onClick={() => handleMockType(type.value)}
                >
                  <h4>{type.value}</h4>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row pt-10">
            <div className="w-60 h-fit text-md font-normal text-gray-900 bg-white rounded-lg">
              {subjects.map((subject: Subject, ind) => {
                return (
                  <>
                    <a
                      href="#"
                      className={`mb-2 border border-gray-200 rounded-md block w-full px-4 py-2 border-b border-gray-200 cursor-pointer  ${
                        ind === subjectIndex
                          ? "bg-green-400 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() => handleSubjectIndex(ind)}
                    >
                      {subject.name}
                    </a>
                  </>
                );
              })}
            </div>
            <div className="w-[400px] h-fit">
              {/* @ts-ignore */}
              {subjects[subjectIndex]?.topics?.map((topic: Topic, ind) => (
                <a
                  href="#"
                  className={`ml-5 rounded-md block w-full px-4 py-2 capitalize border-b border-gray-200 cursor-pointer ${
                    ind === selectedTopicIndex
                      ? "bg-cyan-400 text-white"
                      : "bg-white text-black"
                  }`}
                  key={topic._id}
                  onClick={() => {
                    getTestList(topic.name);
                    setSelectedTopicIndex(ind);
                  }}
                >
                  {topic.name}
                </a>
              ))}
            </div>

            {/* Display data based on the selected type */}

            {loading ? (
              <div className="flex flex-col mx-10" style={{ gap: "10px" }}>
                <Loader />
              </div>
            ) : (
              <div className="flex flex-col mx-10" style={{ gap: "10px" }}>
                {testsData?.map((key, index) => {
                  return (
                    <>
                      <MockTestCard
                        key={key._id}
                        title={key.title}
                        questions={key.questions}
                      />
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
