import { connect } from "@/dbConfig/dbConfig";
import { Cart } from "@/models/Cart";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: Request) {
  try {
    const { email, phone, otp } =await req.json();

    let user = null;

    if (email) {
      user = await User.findOne({
        email: { $regex: new RegExp(email?.trim() || "", "i") },
      });
    } else if (phone) {
      user = await User.findOne({ phone: phone });
    }

    if (!email && !phone) {
      return NextResponse.json({ message: "Please provide email or phone." });
    }

    if (!user) {
      return NextResponse.json({ message: "User not found,Please Register" });
    }
    // Check if the OTP is valid
    if (otp === "1234") {
      var token = jwt.sign(
        {
          _id: user?._id,
        },
        process.env.JWT_TOKEN_SECRET || "",
        {
          expiresIn: 86400,
        }
      );

      return NextResponse.json({
        success: true,
        message: "OTP verification successful",
        token: token,
        user: user,
      });
    } else {
      NextResponse.json({ message: "Invalid OTP" });
    }
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
