import { connect } from "@/dbConfig/dbConfig";
import { Test, TestSeries } from "@/models/Mocks";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request) {
  try {

    const { searchParams } = new URL(request.url);

    const exam = searchParams.get('exam');

    // Build the filter object based on provided parameters
    const filter: any = {
      exam: new RegExp(`^${exam}$`, "i"),
    };

    console.log( 'Before TestSeries.find',filter);
    const testSeries = await TestSeries.find(filter).populate('tests')
    console.log('After TestSeries.find',testSeries);

    return NextResponse.json({ success: true, data: testSeries });
  } catch (error) {
    console.error("Error retrieving test series", error);
    return NextResponse.json({
      message: "Failed to Retrieve Test Series",
      error: error,
    });
  }
}