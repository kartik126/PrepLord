// Import necessary dependencies
"use client";
import React, { useState } from "react";
import Header from "../../../components/modules/Header";
import EnquiryFormStatic from "@/components/modules/EnquiryFormStatic";
import { primary_color } from "@/utils/Colors";
import MockTestRightSideComponent from "@/components/modules/MockTestRightSideComponent";

// Define the MockTest component
export default function MockTest() {
  interface Question {
    questionNumber: number;
    question: string;
    marks: {
      correct: number;
      incorrect: number;
    };
    options: string[];
  }
  // Sample question data

  const questionData: Question[] = [
    {
      questionNumber: 1,
      question:
        "Explain the concept of global warming and its impact on the environment.",
      marks: { correct: 5, incorrect: -2 },
      options: [
        "Global warming is the long-term increase in Earth's average surface temperature due to human activities, such as the burning of fossil fuels.",
        "It has various impacts on the environment, including rising sea levels, extreme weather events, and disruptions to ecosystems.",
        "Mitigation strategies involve reducing greenhouse gas emissions and promoting sustainable practices.",
        "The Kyoto Protocol and Paris Agreement are international efforts to address global warming.",
      ],
    },
    {
      questionNumber: 2,
      question:
        "Discuss the significance of the Renaissance in European history.",
      marks: { correct: 4, incorrect: -1 },
      options: [
        "The Renaissance was a cultural and intellectual movement that emerged in Europe during the 14th to 17th centuries.",
        "It marked a transition from the medieval period to the modern era, emphasizing humanism, art, literature, and scientific inquiry.",
        "Key figures of the Renaissance include Leonardo da Vinci, Michelangelo, and William Shakespeare.",
        "The printing press played a crucial role in spreading Renaissance ideas and knowledge.",
      ],
    },
    {
      questionNumber: 3,
      question:
        "Examine the causes and consequences of the Industrial Revolution.",
      marks: { correct: 5, incorrect: -2 },
      options: [
        "The Industrial Revolution was a period of rapid industrialization and technological advancements that began in the late 18th century.",
        "Causes include the development of new technologies, the growth of capitalism, and the shift from agrarian to industrial economies.",
        "Consequences include urbanization, social changes, and the rise of factory-based production.",
        "The Industrial Revolution had a profound impact on society, economy, and the environment.",
      ],
    },
    {
      questionNumber: 4,
      question:
        "Explore the main features and functions of the human nervous system.",
      marks: { correct: 4, incorrect: -1 },
      options: [
        "The nervous system is a complex network of cells that transmit signals between different parts of the body.",
        "It consists of the central nervous system (brain and spinal cord) and the peripheral nervous system.",
        "Functions include sensory perception, motor control, and the regulation of physiological processes.",
        "Neurons are the fundamental units of the nervous system, transmitting electrical impulses through synapses.",
      ],
    },
    {
      questionNumber: 5,
      question:
        "Analyze the causes and effects of the Great Depression in the 1930s.",
      marks: { correct: 5, incorrect: -2 },
      options: [
        "The Great Depression was a severe worldwide economic downturn that began in the late 1920s and lasted throughout the 1930s.",
        "Causes include the stock market crash of 1929, bank failures, and a decline in international trade.",
        "Effects included widespread unemployment, poverty, and social unrest.",
        "Government interventions, such as the New Deal, aimed to address the economic challenges of the Great Depression.",
      ],
    },
    {
      questionNumber: 6,
      question:
        "Discuss the structure and functions of DNA in living organisms.",
      marks: { correct: 4, incorrect: -1 },
      options: [
        "DNA, or deoxyribonucleic acid, is the genetic material that carries the instructions for the development and functioning of living organisms.",
        "Its structure is a double helix, consisting of two complementary strands of nucleotides bonded by hydrogen bonds.",
        "Functions include encoding genetic information, replication, and protein synthesis.",
        "The discovery of the structure of DNA is attributed to James Watson and Francis Crick.",
      ],
    },
    {
      questionNumber: 7,
      question: "Explore the impact of social media on contemporary society.",
      marks: { correct: 4, incorrect: -1 },
      options: [
        "Social media has revolutionized communication, allowing people to connect and share information globally.",
        "It has influenced political discourse, activism, and the spread of news and misinformation.",
        "Issues related to privacy, mental health, and online harassment have arisen as challenges associated with social media use.",
        "Platforms like Facebook, Twitter, and Instagram have become integral parts of modern social interactions.",
      ],
    },
    {
      questionNumber: 8,
      question:
        "Examine the principles of sustainable development and their importance.",
      marks: { correct: 5, incorrect: -2 },
      options: [
        "Sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs.",
        "It involves the integration of economic, social, and environmental considerations in decision-making.",
        "Principles include environmental conservation, social equity, and economic viability.",
        "Sustainable development is crucial for addressing global challenges such as climate change, biodiversity loss, and poverty.",
      ],
    },
  ];
  // State to track selected option
  const [selectedOptions, setSelectedOptions] = useState<Array<string | null>>(
    Array(questionData.length).fill(null)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const generateQuestionStatuses = () => {
    return Array(questionData.length).fill("notVisited");
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
                Question No. {questionData[currentQuestion].questionNumber} /{" "}
                {questionData.length}
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
              {questionData[currentQuestion].question}
            </p>

            {/* MCQ Options with Radio Buttons */}
            <div className="mt-4 mx-5">
              <ul className="list-disc pl-6">
                {questionData[currentQuestion].options.map(
                  (option, optionIndex) => (
                    <ul key={optionIndex} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`mcqOptions-${currentQuestion}`}
                          value={option}
                          checked={selectedOptions[currentQuestion] === option}
                          onChange={() => handleOptionSelect(option)}
                          className="mr-2"
                        />
                        <span className="ml-1">{option}</span>
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
          <MockTestRightSideComponent
            questionStatuses={questionStatuses}
            setQuestion={setCurrentQuestion}
          />
        </div>
      </div>
    </>
  );
}
