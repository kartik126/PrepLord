import { connect } from "@/dbConfig/dbConfig";
import { Cart } from "@/models/Cart";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();

export async function POST(req: Request) {
  try {
    const {email, phone } = (await req.json()) as {
      email: string;
      phone: string;
    };

    let user = null;

    if (email) {
      user = await User.findOne({
        email: { $regex: new RegExp(email?.trim() || "", "i") },
      });
    } else if (phone) {
      user = await User.findOne({ phone:phone });
    }

    if (!user) {
      console.log("User not found:", email, phone);
      return NextResponse.json({success:false,message: "User not found" });
    }

    return NextResponse.json({
      success: true,
      message: "Otp sent successfully",
    });
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
