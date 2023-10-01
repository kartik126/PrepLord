import User from "@/models/User";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    const setuser = new User({
      name,
      email: email.toLowerCase(),
      password: hashed_password,
    });

    await setuser.save();

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
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
