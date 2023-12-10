import { connect } from "@/dbConfig/dbConfig";
import { Test } from "@/models/TestSeries";
import { NextResponse } from "next/server";


connect();

export async function GET(req: Request, { params }: any) {
  try {
    const { id } = params;

    const test = await Test.findById(id).populate("questions");

    console.log(test);
    return NextResponse.json({
      message: "success",
      test,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal server error", error });
  }
}
