import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "../../../../models/User";

connect();

// Handles POST requests to /api
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json(); // Assuming you are sending JSON data in the request body

    // Basic validation checks
    if (!email || !password) {
      return NextResponse.json(
        { message: "Please provide both email and password" },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // You can generate a JWT token for authentication here if needed

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    return NextResponse.json({ message: "Error logging in" }, { status: 500 });
  }
}
