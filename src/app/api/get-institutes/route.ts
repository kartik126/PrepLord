import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Institute from "@/models/Institutes";

connect();

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.json(); // Parse JSON data from the request body

    const filters: any = {};

    const { city, class_mode, language, locality ,courses} = requestBody;

    if (courses && courses.length > 0) {
      // Split the courses filter into an array of individual courses
      const courseArray = courses.split(',').map((course: string) => course.trim());

      // Create a regular expression pattern to match any course in the array
      const coursesRegExp = new RegExp(courseArray.join('|'), 'i');

      // Use the regular expression pattern for case-insensitive matching
      filters.courses = { $regex: coursesRegExp };
    }
    if (city && city.length > 0) {
      filters.city = { $in: city };
    }

    if (class_mode && class_mode.length > 0) {
      filters.class_mode = { $in: class_mode };
    }

    if (language && language.length > 0) {
      filters.language = { $in: language };
    }

    if (locality && locality.length > 0) {
      filters.language = { $in: locality };
    }

    const institutes = await Institute.find(
      Object.keys(filters).length > 0 ? filters : {}
    );

    return NextResponse.json({ message: "success", institutes });
  } catch (error) {
    console.error("Error getting institutes", error);
    return NextResponse.json({
      message: "Failed",
    });
  }
}
