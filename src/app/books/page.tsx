"use client"
import React from "react";
import Header from "../../components/modules/Header";
import BookCard from "@/components/modules/BookCard";
import { myExam } from "@/recoil/store";

const books = [
  {
    _id: "655e40fcccfc3c2be3c33070",
    title: "Quantitative Aptitude for Competitive Examinations",
    author: "R S Aggarwal",
    image:
      "https://res.cloudinary.com/dfds5srjo/image/upload/v1700675836/Home/images/lpvsd22kiui9nqsnwgcp.jpg",
    price: "490",
    examType: "CAT",
  },
];

console.log(myExam)
function page() {
  return (
    <>
      <Header />
      <div className="flex flex-row px-10 pt-20">
        {books.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
    </>
  );
}

export default page;
