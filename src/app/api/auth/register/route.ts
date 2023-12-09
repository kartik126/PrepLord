import { connect } from "@/dbConfig/dbConfig";
import { Cart } from "@/models/Cart";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();

export async function POST(req: Request) {
  try {
    const { name, email, phone } = (await req.json()) as {
      name: string;
      email: string;
      phone: string;
    };

    const existingUser = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email or phone already exists" });
    }

    let cart = await Cart.create({});

    const setuser = new User({
      name,
      email: email.toLowerCase(),
      phone: phone,
      cart: cart._id,
    });

    await setuser.save();

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user: setuser,
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
