import { connect } from "@/dbConfig/dbConfig";
import { TestSeries } from "@/models/Mocks";

import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    const exam = requestBody.exam;
    const title = requestBody.title;
    const totalTests = requestBody.totalTests;
    const tests = requestBody.tests;

    const newTestSeries = new TestSeries({
      exam,
      title,
      totalTests,
      tests: tests,
    });

    const testSeries = await newTestSeries.save();

    return NextResponse.json({
      message: "Test series created successfully",
      data: testSeries,
    });
  } catch (error) {
    console.error("Error creating test series:", error);
    return NextResponse.json({
      message: "Failed creating test series",
    });
  }
}
