import React from "react";
import Image from "next/image";

function ExamCard({ exam }: any) {
  return (
    <div className="flex flex-col items-center justify-center w-[200px]">
      <div className="shadow-md cursor-pointer w-[100px] h-[100px] border bg-[#fff] relative rounded-full group overflow-hidden">
        <img src={exam.image} style={{ width: "100%", height: "100%" }} alt={exam.name} />
      </div>
      <h4 className="text-black text-1xl mt-2 font-medium text-center">{exam.name}</h4>
    </div>



  );
}

export default ExamCard;
