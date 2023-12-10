"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/modules/Header";
import { primary_color } from "@/utils/Colors";
import Link from "next/link";
import apiClient from "@/utils/apiClient";
import MockTestCard from "@/components/modules/MockTestCard";

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
  const [subjectTitle, setsubjectTitle] = useState(null);
  const [mockType, setmockType] = useState(null);
  const handleTypeChange = (type: any) => {
    setSelectedType(type);
    // You can implement logic here to fetch and display data based on the selected type
  };

  useEffect(() => {
    // setexam(exam_name);
    getSubjectList();
    getTestList();
  }, []);

  const getTestList = async () => {
    const exam_name: any = localStorage.getItem("myExamName");
    const title = subjectTitle;
    const mock_type = null;
    try {
      const res = await apiClient.get(
        `${apiClient.Urls.getTestList}/${exam_name}?title=${title}&mock_type=${mock_type}`
      );

      if (res.success) {
        console.log("dataaaaa", res);
        setTestsData(res.data);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
      //  setinstitute(null);
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
  };

  return (
    <>
      <Header />
      <div className="flex bg-white pt-20 px-20">
        <div className="w-90">
          <div>
            <h1 className="font-medium text-2xl pt-3">
              Attempt {exam} Exams Mock Test
            </h1>
            <p>Start Your Free Mock Tests Here</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <div
              onClick={() => handleTypeChange("Full Syllabus")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "5px 22px",
                fontWeight: selectedType === "Full Syllabus" ? "500" : "normal",
                border:
                  selectedType === "Full Syllabus"
                    ? "1.5px solid"
                    : "1px solid #ccc",
                borderRadius: "20px",
                backgroundColor: "#fff",
                color:
                  selectedType === "Full Syllabus" ? primary_color : "#333",
              }}
            >
              <h4>Practice</h4>
            </div>
            <div
              onClick={() => handleTypeChange("Sectional")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "5px 22px",
                fontWeight: selectedType === "Sectional" ? "500" : "normal",
                border:
                  selectedType === "Sectional"
                    ? "1.5px solid"
                    : "1px solid #ccc",
                borderRadius: "20px",
                backgroundColor: "#fff",
                color: selectedType === "Sectional" ? primary_color : "#333",
              }}
            >
              <h4>Sectional</h4>
            </div>
            <div
              onClick={() => handleTypeChange("Topic Wise")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "5px 22px",
                fontWeight: selectedType === "Topic Wise" ? "500" : "normal",
                border:
                  selectedType === "Topic Wise"
                    ? "1.5px solid"
                    : "1px solid #ccc",
                borderRadius: "20px",
                backgroundColor: "#fff",
                color: selectedType === "Topic Wise" ? primary_color : "#333",
              }}
            >
              <h4>Topic Wise</h4>
            </div>
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
              {subjects[subjectIndex]?.topics?.map((topic: Topic) => (
                <a
                  href="#"
                  className="ml-5 rounded-md block w-full px-4 py-2 capitalize border-b border-gray-200 cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-cyan-400 focus:text-white"
                  key={topic._id}
                  onClick={() => handleTopic(topic.name)}
                >
                  {topic.name}
                </a>
              ))}
            </div>
            {/* Display data based on the selected type */}
            {selectedType === "Full Syllabus" && (
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
