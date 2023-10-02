"use client";
import React, { useState } from 'react';
import Header from '../../components/modules/Header';
import Footer from '@/components/modules/Footer';
import { primary_color } from '@/utils/Colors';
import ExamCard from '@/components/modules/ExamCard';

const Jobs = [
  "ESIC 1038 Various Vacancy 2023 Online Form",
  "GRSE Ltd 246 Apprentice 2023 Online Form",
  "NCL 1140 Trade (ITI) Apprentice Trainee 2023 Online Form",
  "Indian Army TGC – 139 July 2024 Online Link Available",
  "BEML 119 Group C 2023 Online Form",
  "RRC, Eastern Railway 3115 Act Apprentice 2023 Online Link Available",
  "SBI 2000 PO 2023 Last Date Extended",
  "AIIMS, Patna 147 Senior Nursing Officer & Tutor Online Form 2023",
  "SJVN Limited 155 Junior Field Engineer & Officer 2023 Last Date Extended",
  "UPSC IES/ ISS DAF Online Form 2023",
  "BEML 119 Group C 2023 Online Link Available",
  "AIIMS, Bathinda 89 Various Vacancy Offline Form 2023",
  "ECIL 484 ITI Trade Apprentice 2023 Online Form",
  "UPSC 577 EO/ AO & APFC 2023 DAF Online Form",
  "IHBL 113 Various Vacancy 2023 Online Form"
];

const Notifications = [
  "Latest Notifications",
  "Examwise Information",
  "Education",
  "Result"
]

const Announcements = [
  "Admit Card",
  "Exam Results",
  "Exam Date",
  "Interview Results",
  "Answer Key",
  "Cutoff Marks"
]
const Others = [
  "Exam Pattern",
  "Selection Process",
  "Syllabus",
  "Previous Papers",
]

function Page() {
  const [heading, setHeading] = useState('Latest Notifications');
  return (
    <>
      <Header />
      <div className="flex bg-white pt-20">
        <div className="w-1/4 p-10">
          {/* Notifications */}
          <div className='' style={{ backgroundColor: primary_color }}>
            <h3 className="fs-18 text-white text-left font-bold py-2 pl-3">
              Notifications
            </h3>
          </div>
          <ul className="list-disc list-inside p-4">
            {Notifications.map((key, index) => (
              <li key={index} onClick={() => setHeading(key)} className="text-gray-700 font-medium hover:text-blue-500 hover:cursor-pointer py-1 flex items-center" style={{ color: primary_color }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                {key}
              </li>
            ))}
          </ul>

          {/* Announcements */}
          <div className='' style={{ backgroundColor: primary_color }}>
            <h3 className="fs-18 text-white text-left font-bold py-2 pl-3">
              Latest Announcements
            </h3>
          </div>
          <ul className="list-disc list-inside p-4">
            {Announcements.map((key, index) => (
              <li key={index} onClick={() => setHeading(key)} className="text-gray-700 font-medium hover:text-blue-500 hover:cursor-pointer py-1 flex items-center" style={{ color: primary_color }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                {key}
              </li>
            ))}
          </ul>

          {/* Others */}
          <div className='' style={{ backgroundColor: primary_color }}>
            <h3 className="fs-18 text-white text-left font-bold py-2 pl-3">
              Others
            </h3>
          </div>
          <ul className="list-disc list-inside p-4">
            {Others.map((key, index) => (
              <li key={index} onClick={() => setHeading(key)} className="text-gray-700 font-medium hover:text-blue-500 hover:cursor-pointer py-1 flex items-center" style={{ color: primary_color }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                {key}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/4 p-5"> {/* 2/3 of the width */}
          <CenterDiv heading={heading} />
        </div>
        <div className="w-1/3 p-5">
          <div className='' style={{ backgroundColor: primary_color }}>
            <h3 className="text-xl text-white text-left font-medium py-3 pl-5">
              Job Notifications
            </h3>
          </div>
          <ul className="list-disc list-inside p-4">
            {Jobs.map((job, index) => (
              <li className="text-gray-700 py-1 hover:text-blue-500 hover:underline hover:cursor-pointer" key={index}>
                {job}
              </li>
            ))}
          </ul>
          <div className='' style={{ backgroundColor: primary_color }}>
            <h3 className="text-2xl text-white text-left font-medium py-3 pl-5">
              Admit Card
            </h3>
          </div>
          <ul className="list-disc list-inside p-4">
            {Jobs.slice(2,8).map((job, index) => (
              <li className="text-gray-700 py-1 hover:text-blue-500 hover:underline hover:cursor-pointer" key={index}>
                {job}
              </li>
            ))}
          </ul>
          
          <div className='' style={{ backgroundColor: primary_color }}>
            <h3 className="text-2xl text-white text-left font-medium py-3 pl-5">
              Results
            </h3>
          </div>
          <ul className="list-disc list-inside p-4">
            {Jobs.slice(5,20).map((job, index) => (
              <li className="text-gray-700 py-1 hover:text-blue-500 hover:underline hover:cursor-pointer" key={index}>
                {job}
              </li>
            ))}
          </ul>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;

const examsData = [
  { name: "UGC NET", image: "https://www.careerwill.com/images/exam1.png" },
  { name: "SSC JE", image: "https://www.careerwill.com/images/exam6.png" },
  { name: "SBI CLERK", image: "https://www.careerwill.com/images/exam2.png" },
  { name: "RBI ASSISTANT", image: "https://www.careerwill.com/images/exam3.png" },
  { name: "RRB JE", image: "https://www.careerwill.com/images/exam4.png" },
  { name: "IBPS SO", image: "https://www.careerwill.com/images/exam5.png" },
  { name: "BPSC EXAM", image: "https://www.careerwill.com/images/exam7.png" },
  { name: "INDIAN NAVY SSR", image: "https://www.careerwill.com/images/exam8.png" },
  { name: "UPSSSC VDO", image: "https://www.careerwill.com/images/exam9.png" },
  { name: "INDIAN NAVY CHARGEMAN", image: "https://www.careerwill.com/images/exam11.png" },
  { name: "DFCCIL EXECUTIVE", image: "https://www.careerwill.com/images/exam12.png" },
  { name: "EMRS TGTR", image: "https://www.careerwill.com/images/exam10.png" }
];
const bankData = [
  {
    date: '2023-10-05',
    bankName: 'SBI',
    examName: 'CRP RRB XII 2023 Officer (Scale-I) Main Result & (Scale II & III) Single Exam Result',
    moreInformation: 'Get Details',
  },
  {
    date: '2023-10-10',
    bankName: 'IBPS',
    examName: 'Administrative Officer 2023 Prelims Result',
    moreInformation: 'Get Details',
  },
  {
    date: '2023-10-15',
    bankName: 'HDFC Bank',
    examName: 'Probationary Officer 2023 Final Result',
    moreInformation: 'Get Details',
  },
  {
    date: '2023-10-30',
    bankName: 'Bank of Baroda',
    examName: 'Probationary Officer 2023 Main Exam Result',
    moreInformation: 'Get Details',
  },
  {
    date: '2023-11-05',
    bankName: 'Canara Bank',
    examName: 'Clerk 2023 Final Result',
    moreInformation: 'Get Details',
  },
  {
    date: '2023-11-10',
    bankName: 'Punjab National Bank',
    examName: 'Specialist Officer 2023 Main Exam Result',
    moreInformation: 'Get Details',
  },
  {
    date: '2023-11-15',
    bankName: 'IDBI Bank',
    examName: 'Assistant Manager 2023 Prelims Result',
    moreInformation: 'Get Details',
  },
];


function CenterDiv({ heading }: any) {
  return (
    <div>
      <div>
        <h1 className='font-medium text-2xl py-3'>
          {heading}
        </h1>
        {/* Quick Links */}
        <div className="flex flex-row justify-between py-5">
          {examsData.slice(0, 4).map((exam, index) => (
            <ExamCard key={index} exam={exam} />
          ))}
        </div>
        <div className="flex flex-row justify-between py-5">
          {examsData.slice(5, 9).map((exam, index) => (
            <ExamCard key={index} exam={exam} />
          ))}
        </div>
      </div>

{/* Banks */}
      <div>
        <h1 className='font-medium text-2xl py-3'>
          Banks
        </h1>

        {/* Table */}
        <div className="bg-primary_color rounded-md p-4">
          <table className="w-full">
            <thead style={{ backgroundColor: primary_color }} >
              <tr>
                <th className="bg-primary_color text-white px-4 py-2">Date</th>
                <th className="bg-primary_color text-white px-4 py-2">Name of the Bank</th>
                <th className="bg-primary_color text-white px-4 py-2">Exam Name</th>
                <th className="bg-primary_color text-white px-4 py-2">More Information</th>
              </tr>
            </thead>
            <tbody>
              {bankData.slice(2, 7).map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.date}</td>
                  <td className="border px-4 py-2">{row.bankName}</td>
                  <td className="border px-4 py-2">{row.examName}</td>
                  <td className="border px-4 py-2 text-medium text-blue-700 underline ">
                    <a href={row.moreInformation} target="_blank" rel="noopener noreferrer">
                      {row.moreInformation}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* SSC */}
      <div>
        <h1 className='font-medium text-2xl py-3'>
          SSC
        </h1>

        {/* Table */}
        <div className="bg-primary_color rounded-md p-4">
          <table className="w-full">
            <thead style={{ backgroundColor: primary_color }} >
              <tr>
                <th className="bg-primary_color text-white px-4 py-2">Date</th>
                <th className="bg-primary_color text-white px-4 py-2">Exam Name</th>
                <th className="bg-primary_color text-white px-4 py-2">More Information</th>
              </tr>
            </thead>
            <tbody>
              {bankData.slice(0, 4).map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.date}</td>
                  <td className="border px-4 py-2">{row.examName}</td>
                  <td className="border px-4 py-2 text-medium text-blue-700 underline ">
                    <a href={row.moreInformation} target="_blank" rel="noopener noreferrer">
                      {row.moreInformation}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Other */}
      <div>
        <h1 className='font-medium text-2xl py-3'>
        Other All India exams
        </h1>

        {/* Table */}
        <div className="bg-primary_color rounded-md p-4">
          <table className="w-full">
            <thead style={{ backgroundColor: primary_color }} >
              <tr>
                <th className="bg-primary_color text-white px-4 py-2">Date</th>
                <th className="bg-primary_color text-white px-4 py-2">Recruitment Board</th><th className="bg-primary_color text-white px-4 py-2">Exam Name</th>
                <th className="bg-primary_color text-white px-4 py-2">More Information</th>
              </tr>
            </thead>
            <tbody>
              {bankData.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.date}</td>
                  <td className="border px-4 py-2">{row.bankName}</td>
                  <td className="border px-4 py-2">{row.examName}</td>
                  <td className="border px-4 py-2 text-medium text-blue-700 underline ">
                    <a href={row.moreInformation} target="_blank" rel="noopener noreferrer">
                      {row.moreInformation}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
