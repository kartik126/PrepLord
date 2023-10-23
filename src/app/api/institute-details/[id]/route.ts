import { connect } from "@/dbConfig/dbConfig";
import Institute from "@/models/Institutes";
import { NextResponse } from "next/server";

connect();

export async function GET(req: Request, { params }: any) {
  try {
    const { id } = params;

    console.log(id);

    const institute = await Institute.findById(id);

    console.log(institute);
    return NextResponse.json({
      message: "success",
      institute,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal server error", error });
  }
}
