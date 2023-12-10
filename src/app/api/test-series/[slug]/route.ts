import { connect } from "@/dbConfig/dbConfig";
import { Test } from "@/models/TestSeries";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

connect();

export async function GET(request: NextApiRequest) {
  try {

    const { slug, title, mock_type } = request.query;
    console.log("query==========================>",slug)

    // Build the filter object based on provided parameters
    const filter: any = {
      exam: new RegExp(`^${slug}$`, "i"),
    };

    // Add additional conditions if title is provided
    if (title) {
      filter.title = new RegExp(`^${title}$`, "i");
    }

    // Add additional conditions if mock_type is provided
    if (mock_type) {
      filter.mock_type = new RegExp(`^${mock_type}$`, "i");
    }

    const testSeries = await Test.find(filter).populate("questions");

    return NextResponse.json({ success: true, data: testSeries });
  } catch (error) {
    console.error("Error retrieving test series", error);
    return NextResponse.json({
      message: "Failed to Retrieve Test Series",
      error: error,
    });
  }
}
