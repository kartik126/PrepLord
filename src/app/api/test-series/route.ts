import { connect } from "@/dbConfig/dbConfig";
import { Question } from "../../../models/TestSeries";
import { Test } from "../../../models/TestSeries";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  try {
    const data:any = await request.json();

    console.log("dasta=========================================>",data)

    const title = data.title;
    const questions = data.questions;
    const durationInMinutes = data.durationInMinutes;
    

    const questionIds = [];

    for (const questionData of questions) {
      const question = new Question(questionData);
      await question.save();
      questionIds.push(question._id);
    }

    const exam = new Test({
      title,
      questions: questionIds,
      durationInMinutes,
    });
    await exam.save();
     return NextResponse.json({ success: true, data: exam });
  } catch (error) {
    console.error("Error creating test series", error);
    return NextResponse.json({
      message: "Failed to Create Test Series",
    });
  }
}

export async function GET(request: Request) {
  try {
    // Retrieve test series data from your database, for example:
    const testSeries = await Test.find().populate('questions');

    return NextResponse.json({ success: true, data: testSeries });
  } catch (error) {
    console.error("Error retrieving test series", error);
    return NextResponse.json({
      message: "Failed to Retrieve Test Series",
    });
  }
}
