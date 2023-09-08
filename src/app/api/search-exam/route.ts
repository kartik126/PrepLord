import { connect } from "@/dbConfig/dbConfig";
import Exams from "@/models/Exams";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  try {
    const requestBody = await request.formData();
    const searchQuery: any = requestBody.get("search");

    if (searchQuery === null || searchQuery === undefined) {
      throw new Error("Search query not found in the request body.");
    }

    console.log("request-------------------->", searchQuery);
    const regex = new RegExp(searchQuery, "i");

    const searchResult = await Exams.find({
      name: regex,
    });

    return NextResponse.json({
      message: "success",
      searchResult,
    });
  } catch (err) {
    console.error("Error in sending your request", err);
    return NextResponse.json({
      message: "Failed",
    });
  }
}
