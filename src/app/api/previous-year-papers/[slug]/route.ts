import { connect } from "@/dbConfig/dbConfig";
import Papers from "@/models/Papers";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest, { params }: any) {
  const exam_name = params.slug; // Retrieve 'exam_name' from query parameters
  try {
    const papers = await Papers.find({
      exam_name: new RegExp(`^${exam_name}$`, "i"),
    });

    // Check if papers were found
    if (papers.length === 0) {
      return NextResponse.json(
        { message: "No papers found for the given exam" },
        { status: 404 }
      );
    }

    return NextResponse.json({ papers });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error retrieving papers" },
      { status: 500 }
    );
  }
}
