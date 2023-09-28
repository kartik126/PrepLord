import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Exams from "../../../models/Exams";

connect();

export async function GET(request: Request) {
  try {
    const getExams = await Exams.find({});
    return NextResponse.json({ message: "success", data: getExams });
  } catch (error) {
    console.error("Error getting exam", error);
    return NextResponse.json({
      message: "Failed",
    });
  }
}

// Handles POST requests to /api
export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    console.log("request-------------------->", requestBody);

    // Create a new Exam instance using the Mongoose model
    const newExam = new Exams({
      name: requestBody.name,
      categories: requestBody.categories,
    });

    const savedExam = await newExam.save();

    return NextResponse.json({
      message: "Exam and subcategories added successfully",
      exam: savedExam,
    });
  } catch (error) {
    console.error("Error adding exam and subcategories:", error);
    return NextResponse.json({
      message: "Failed to add exam and subcategories",
    });
  }
}
