// Import necessary dependencies
"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/modules/Header";
import EnquiryFormStatic from "@/components/modules/EnquiryFormStatic";
import { primary_color } from "@/utils/Colors";
import MockTestRightSideComponent from "@/components/modules/MockTestRightSideComponent";
import apiClient from "@/utils/apiClient";

// Define the MockTest component
export default function MockTest({ params }: { params: { slug: string } }) {
  interface Option {
    text: string;
    // Add other properties if necessary
  }
  interface Question {
    questionNumber: number;
    question: string;
    text: string;
    marks: {
      correct: number;
      incorrect: number;
    };
    options: Option[];
    durationInMinutes: number;
  }
  // Sample question data

  const [test, setTest] = useState<Question[]>([]);
  const [questionData, setQuestionData] = useState<Question[]>([]);
  const [totalQuestions, settotalQuestions] = useState([])

  console.log("Testing",questionData.length)


  const getMockTest = async (slug: any) => {
    try {
      const res = await apiClient.get(`${apiClient.Urls.getMockTest}/${slug}`, {
        cache: "force-cache",
      });
      const data = res;
      console.log("dataaaaa", res);
      if (res.message == "success") {
        setTest(res.test);
        setQuestionData(res.test.questions);
        settotalQuestions(res.test.questions.length)
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
      // setinstitute(null);
    }
  };

  useEffect(() => {

    if (params.slug) {
      getMockTest(params.slug);
    }
    console.log("params----->", params);
  }, [params.slug]);

  // State to track selected option
  const [selectedOptions, setSelectedOptions] = useState<Array<string | null>>(
    Array(questionData.length).fill(null)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const generateQuestionStatuses = () => {
    return Array(questionData.length).fill(null);
  };

  const [questionStatuses, setQuestionStatuses] = useState(
    generateQuestionStatuses()
  );

  const handleSaveAndNext = () => {
    // Update the question status to "notVisited" if not already answered
    if (selectedOptions[currentQuestion] === null) {
      updateQuestionStatus(currentQuestion, "unanswered");
    }

    // Increment the current question index
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleClearResponse = () => {
    // Clear the selected option and update the question status to "notVisited"
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[currentQuestion] = null;
      updateQuestionStatus(currentQuestion, "notVisited");
      return newSelectedOptions;
    });
  };
  const handleMarkForReview = () => {
    // Update the question status to "review" when marked for review
    updateQuestionStatus(currentQuestion, "marked");

    // Increment the current question index
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  // Function to handle option selection for a specific question
  const handleOptionSelect = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[currentQuestion] = option;
      updateQuestionStatus(currentQuestion, "answered");
      return newSelectedOptions;
    });
  };

  const updateQuestionStatus = (questionIndex: number, status: string) => {
    setQuestionStatuses((prevStatuses) => {
      const newStatuses = [...prevStatuses];
      newStatuses[questionIndex] = status;
      return newStatuses;
    });
  };
  // Render the component
  return (
    <>
      <Header />
      <div className="flex flex-row px-10 pt-20 bg-[#fff]">
        <div className="w-[70%]">
          <div className="flex flex-col border  mt-10 mb-10 pb-20 bg-[#fff]">
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <h3 className="text-left">
                Question No. {currentQuestion + 1} / {questionData.length}
              </h3>
              <div className="flex flex-col items-center">
                <h5 className="mr-2">Marks</h5>
                <div className="flex">
                  <h5
                    className="bg-green-500 rounded-lg text-white mr-2"
                    style={{ padding: 5 }}
                  >
                    +2.5
                  </h5>
                  <h5
                    className="bg-red-500 rounded-lg text-white mr-2"
                    style={{ padding: 5 }}
                  >
                    -1
                  </h5>
                </div>
              </div>
            </div>

            <h3 className="pb-2 text-1xl mx-10 mt-5 font-bold">Question :</h3>

            <p className="text-gray-600 mx-10 mt-2 text-lg">
              {questionData[currentQuestion]?.text}
            </p>

            {/* MCQ Options with Radio Buttons */}
            <div className="mt-4 mx-5">
              <ul className="list-disc pl-6">
                {questionData[currentQuestion]?.options.map(
                  (option, optionIndex) => (
                    <ul key={optionIndex} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`mcqOptions-${currentQuestion}`}
                          value={option.text}
                          checked={
                            selectedOptions[currentQuestion] === option.text
                          }
                          onChange={() => handleOptionSelect(option.text)}
                          className="mr-2"
                        />
                        <span className="ml-1">{option?.text}</span>
                      </label>
                    </ul>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="flex justify-between mx-5">
            <div className="flex">
              <div>
                <button
                  onClick={handleMarkForReview}
                  style={{ backgroundColor: primary_color }}
                  className="bg-blue-500 text-white px-4 py-2 mx-3 rounded-lg"
                >
                  Mark for Review & Next
                </button>
              </div>
              <div>
                <button
                  onClick={handleClearResponse}
                  style={{ backgroundColor: primary_color }}
                  className="bg-blue-500 text-white px-4 py-2 mx-3 rounded-lg"
                >
                  Clear Response
                </button>
              </div>
              <div>
                <button
                  onClick={handleSaveAndNext}
                  style={{ backgroundColor: primary_color }}
                  className="bg-blue-500 text-white px-4 py-2 mx-3 rounded-lg"
                >
                  Report an Issue
                </button>
              </div>
            </div>
            {currentQuestion + 1 === questionData.length ? (
              <div style={{ alignSelf: "flex-end" }}>
                <button
                  onClick={() => alert("Submit!")}
                  style={{ backgroundColor: primary_color }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={handleSaveAndNext}
                  style={{ backgroundColor: primary_color }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Save and Next
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-[30%]">
          {questionData.length > 0 && (
            <MockTestRightSideComponent
              questionStatuses={questionStatuses}
              setQuestion={setCurrentQuestion}
              timer={test}
              totalQuestions={totalQuestions}
            />
          )}
        </div>
      </div>
    </>
  );
}
