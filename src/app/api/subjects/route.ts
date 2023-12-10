import { connect } from "@/dbConfig/dbConfig";
import Subject from "@/models/Subjects";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request) {
  try {
    const getSubjects = await Subject.find({});
    return NextResponse.json({
      success: true,
      message: "success",
      data: getSubjects,
    });
  } catch (error) {
    console.error("Error getting subjects", error);
    return NextResponse.json({
      message: "Failed",
    });
  }
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    console.log("request-------------------->", requestBody);

    // Create a new Exam instance using the Mongoose model
    const subjects = new Subject({
      name: requestBody.name,
      categories: requestBody.categories,
    });

    const result = await subjects.save();

    return NextResponse.json({
      success: true,
      message: "Subjects added successfully",
      subjects: result,
    });
  } catch (error) {
    console.error("Error adding subjects", error);
    return NextResponse.json({
      message: "Failed to add subjects",
    });
  }
}
