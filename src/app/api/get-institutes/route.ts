import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Institute from "@/models/Institutes";

connect();

export async function POST(request: Request) {
  console.log("request=================================>", request);
  try {
    const req = (await request?.formData()) || null;
    const filters: any = {};

    const all = req?.getAll("all");
    const city = req?.getAll("city");
    const class_mode = req?.getAll("class_mode");
    const language = req?.getAll("language");

    if (city.length > 0) {
      filters.city = { $in: city }; // Use $in for filtering by an array of values
    }

    if (class_mode.length > 0) {
      filters.class_mode = { $in: class_mode };
    }

    if (language.length > 0) {
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
