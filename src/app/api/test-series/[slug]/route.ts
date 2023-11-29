import { connect } from "@/dbConfig/dbConfig";
import { Test } from "@/models/TestSeries";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request, { params }: any) {
  try {
    const exam = params.slug;

    const testSeries = await Test.find({
      exam: new RegExp(`^${exam}$`, "i"),
    }).populate("questions");

    

    return NextResponse.json({ success: true, data: testSeries });
  } catch (error) {
    console.error("Error retrieving test series", error);
    return NextResponse.json({
      message: "Failed to Retrieve Test Series",
      error:error
    });
  }
}
