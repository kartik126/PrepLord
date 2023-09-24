import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Institute from "@/models/Institutes";

connect();

export async function POST(request: Request) {
  console.log("request=================================>", request);
  try {
    const requestBody = await request.json(); // Parse JSON data from the request body

    const filters: any = {};

    const { city, class_mode, language } = requestBody;

    if (city && city.length > 0) {
      filters.city = { $in: city };
    }

    if (class_mode && class_mode.length > 0) {
      filters.class_mode = { $in: class_mode };
    }

    if (language && language.length > 0) {
      filters.language = { $in: language };
    }

    const institutes = await Institute.find(
      Object.keys(filters).length > 0 ? filters : {}
    );

    console.log("institutessssssssssssssssssssssssssssssssssssss", institutes);

    return NextResponse.json({ message: "success", institutes });
  } catch (error) {
    console.error("Error getting institutes", error);
    return NextResponse.json({
      message: "Failed",
    });
  }
}
