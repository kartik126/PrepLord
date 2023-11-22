import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import {
  HiOutlineCheckCircle,
  HiCheckCircle,
  HiBookmarkAlt,
  HiOutlineBookmarkAlt,
} from "react-icons/hi";
import { primary_color } from "@/utils/Colors";

function MockTestRightSideComponent({ questionStatuses, setQuestion }: any) {
  const [isTimerPaused, setTimerPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600); // Initial time in seconds (adjust as needed)

  useEffect(() => {
    let timer: any;

    if (!isTimerPaused) {
      timer = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          // Timer reached zero, handle accordingly (e.g., show a message, submit the test, etc.)
          clearInterval(timer);
          // Additional logic after the timer reaches zero
        }
      }, 1000);
    }

    return () => clearInterval(timer); // Clear the interval on component unmount or when the timer is paused
  }, [isTimerPaused, timeRemaining]);

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div
      style={{ backgroundColor: `${primary_color}30` }}
      className="ml-5 mt-10 rounded fixed top-20 left-[70%] h-[70vh] right-10"
    >
      <section className="w-full">
        <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
          {isTimerPaused ? (
            <div className="flex items-center justify-center mb-4">
              {/* Pause Icon */}
              <FaPlay
                className=" mr-2"
                onClick={() => setTimerPaused(!isTimerPaused)}
              />
              <span className="text-lg font-semibold">Resume Test</span>
            </div>
          ) : (
            <div className="flex items-center justify-center mb-4">
              {/* Pause Icon */}
              <FaPause
                className=" mr-2"
                onClick={() => setTimerPaused(!isTimerPaused)}
              />
              <span className="text-lg font-semibold">Pause Test</span>
            </div>
          )}
          <div className="flex items-center justify-center ">
            <h4
              style={{
                backgroundColor: primary_color,
                paddingLeft: 20,
                paddingRight: 20,
                padding: 5,
              }}
              className="font-bold rounded-md leading-tight tracking-tight text-white-900 text-white"
            >
              Time left: {formatTime(timeRemaining)}
            </h4>
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${primary_color}80`,
            alignSelf: "center",
          }}
          className="w-[full] border rounded-md mx-10 p-4"
        >
          <div
            className="flex flex-wrap justify-between mx-5"
            style={{ gap: "10px" }}
          >
            {questionStatuses.map((status: any, index: any) => (
              <QuestionDigit
                key={index}
                status={status}
                number={index + 1}
                onClick={(questionNumber: number) =>
                  setQuestion(questionNumber - 1)
                }
              />
            ))}
          </div>
          {/* Here I want questions digits with background related to answered, not answered etc. */}
        </div>
        <div className="flex justify-between mx-10 mt-10">
          <div className="mb-2 flex items-center">
            {/* Answered Icon */}
            <HiCheckCircle color="green" className="text-3xl mr-2" />
            <span className="text-black">Answered</span>
          </div>
          <div className="mb-2 flex items-center">
            {/* Unanswered Icon */}
            <HiOutlineCheckCircle color="red" className="text-3xl mr-2" />
            <span className="text-black">Unanswered</span>
          </div>
        </div>
        <div className="flex justify-between mx-10 mt-5">
          <div className="mb-2 flex items-center">
            {/* Marked Icon */}
            <HiBookmarkAlt
              color="purple"
              className="text-3xl text-white mr-2"
            />
            <span className="text-black">Marked</span>
          </div>
          <div className="flex items-center">
            {/* Not Visited Icon */}
            <HiOutlineBookmarkAlt
              color="grey"
              className="text-3xl text-white mr-2"
            />
            <span className="text-black">Not Visited</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MockTestRightSideComponent;

const QuestionDigit = ({ status, number, onClick }: any) => {
  let backgroundColor = "";

  switch (status) {
    case "answered":
      backgroundColor = "green";
      break;
    case "unanswered":
      backgroundColor = "red";
      break;
    case "marked":
      backgroundColor = "purple";
      break;
    case "notVisited":
      backgroundColor = "grey";
      break;
    default:
      break;
  }

  const handleClick = () => {
    // Call the onClick handler with the corresponding question number
    if (onClick) {
      onClick(number);
    }
  };
  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        borderRadius: "50%",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 5px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <span className="text-white">{number}</span>
    </div>
  );
};
