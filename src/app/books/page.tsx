"use client";
import React from "react";
import Header from "../../components/modules/Header";
import BookCard from "@/components/modules/BookCard";
import { myExam } from "@/recoil/store";
import EnquiryFormStatic from "@/components/modules/EnquiryFormStatic";
import { useBooks } from "@/hooks/useBooks";

export default function Books() {
  const { books, loading }: any = useBooks();

  console.log("booooooooooooooooook", books);

  return (
    <>
      <Header />
      <div className="flex flex-row px-10 pt-20">
        <div className="flex flex-row pt-10 w-[100%] lg:w-[70%] flex-wrap">
          {loading === true ? (
            <p>Loading...</p>
          ) : (
            books?.map((book: any, ind: any) => {
              return (
                <>
                  <BookCard key={ind} book={book} />
                </>
              );
            })
          )}
        </div>
        <div className="w-[30%] hidden lg:block">
          <EnquiryFormStatic />
        </div>
      </div>
    </>
  );
}

