import { connect } from "@/dbConfig/dbConfig";
import Exams from "@/models/Exams";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request, { params }: any) {
  try {
    const data = await request.formData();

    const name = data.get("name");
    const rank = data.get("rank");
    const exam_year = data.get("exam_year");
    const telegram_channel = data.get("telegram_channel");

    const { examId } = params;

    const exam = await Exams.findById(examId);

    if (!exam) {
      return NextResponse.json({ message: "Exam not found" });
    }

    exam.toppers.push({ name, rank, exam_year, telegram_channel });

    await exam.save();

    return NextResponse.json({ message: "Topper added successfully", exam });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal server error" });
  }
}
