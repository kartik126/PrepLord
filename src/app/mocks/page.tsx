"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/modules/Header";
import { primary_color } from "@/utils/Colors";
import Link from "next/link";
import apiClient from "@/utils/apiClient";

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
  const handleTypeChange = (type: any) => {
    setSelectedType(type);
    // You can implement logic here to fetch and display data based on the selected type
  };

  useEffect(() => {
    const exam_name: any = localStorage.getItem("myExamName");
    setexam(exam_name);
    getTestList();
  }, [testsData,exam]);

  const getTestList = async () => {
    try {
      const res = await apiClient.get(`${apiClient.Urls.getTestList}/${exam}`);
      console.log("dataaaaa", res);
      if (res.success) {
        setTestsData(res.data);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
      //  setinstitute(null);
    }
  };
  return (
    <>
      <Header />
      <div className="flex bg-white pt-20">
        <div className="w-1/6 p-10"></div>
        <div className="w-2/3 p-5">
          <div>
            <h1 className="font-medium text-2xl pt-3">
              Attempt {exam} Exams Mock Test
            </h1>
            <p>Start Your Free Mock Tests Here</p>
          </div>
          {/* <div className="flex space-x-4 mt-4">
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
              <h4>Full Syllabus</h4>
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
          </div> */}

          {/* Display data based on the selected type */}
          {selectedType === "Full Syllabus" && (
            <div className="flex flex-wrap mx-5" style={{ gap: "10px" }}>
              {testsData.map((key,index) => {
                return (
                  <div key={index} className="mt-8" style={{ marginRight: 10 }}>
                    {/* Data for Full Syllabus */}
                    <div className="cursor-pointer relative w-[250px] h-[240px]  border rounded-lg group overflow-hidden">
                      <div className="absolute flex flex-col items-center w-full h-full">
                        <h3 className="text-black font-medium mb-2 mt-2">
                          {key?.exam}-{key?.title}
                        </h3>
                        {/* <p style={{ fontSize: 12 }}>Expires on 31 Aug 2024</p> */}
                        <div
                          style={{
                            width: "80%",
                            backgroundColor: "#f5f5f5",
                            alignSelf: "center",
                            padding: "8px",
                            borderRadius: "3px",
                            margin: "12px 0",
                          }}
                        >
                          <div className="flex justify-between mb-1">
                            <h5>Question</h5>
                            <h1>{key.questions.length}</h1>
                          </div>
                          <div className="flex justify-between mb-1">
                            <h5>Max marks</h5>
                            <h1>{key.max_marks}</h1>
                          </div>
                          <div className="flex justify-between">
                            <h5>Time</h5>
                            <h1>{key.durationInMinutes}</h1>
                          </div>
                        </div>
                        {/* "Attempt Now" button */}

                        <button
                          className="bg-blue-500 text-white py-2 rounded-md absolute bottom-0"
                          style={{ width: "100%" }}
                        >
                          <Link href={`/mock-test/${key._id}`}>
                            Attempt Now
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {selectedType === "Sectional" && (
            <div className="mt-4">
              {/* Data for Sectional */}
              <p>Sectional content goes here...</p>
            </div>
          )}
          {selectedType === "Topic Wise" && (
            <div className="mt-4">
              {/* Data for Topic Wise */}
              <p>Topic Wise content goes here...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
