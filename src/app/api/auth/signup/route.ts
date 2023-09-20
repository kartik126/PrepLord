import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "../../../../models/User"

connect();

// Handles POST requests to /api
export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json(); // Assuming you are sending JSON data in the request body

    // Basic validation checks
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Please provide all required fields" }, { status: 400 });
    }

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }

    // Create a new User instance and save it to the database
    const newUser = new User({ name, email, password });
    await newUser.save();

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}
