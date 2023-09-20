import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Institute from "@/models/Institutes";

connect();

export async function POST(request: Request) {
  try {
    // Check if the request has a Content-Type of "multipart/form-data"
    const contentType = request.headers.get("Content-Type");
    if (contentType && contentType.includes("multipart/form-data")) {
      const req = await request.formData();
      const filters: any = {};

      const city = req.getAll("city");
      const class_mode = req.getAll("class_mode");
      const language = req.getAll("language");

      // Check if the FormData is empty
      if (
        city.length === 0 &&
        class_mode.length === 0 &&
        language.length === 0
      ) {
        // No filtering criteria provided, return all institutes
        const institutes = await Institute.find({});
        return NextResponse.json({ message: "success", institutes });
      }

      if (city.length > 0) {
        filters.city = { $in: city }; // Use $in for filtering by an array of values
      }

      if (class_mode.length > 0) {
        filters.class_mode = { $in: class_mode };
      }

      if (language.length > 0) {
        filters.language = { $in: language };
      }

      const institutes = await Institute.find(filters);

      return NextResponse.json({ message: "success", institutes });
    } else {
      const institutes = await Institute.find({});

      return NextResponse.json({ message: "success", institutes });
    }
  } catch (error) {
    console.error("Error getting institutes", error);
    return NextResponse.json({
      message: "Failed",
    });
  }
}
