import { connect } from "@/dbConfig/dbConfig";
import { Question } from "../../../models/TestSeries";
import { Test } from "../../../models/TestSeries";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  try {
    const data: any = await request.formData();

    console.log(
      "dasta=========================================>",
      data.getAll("questions[0]")
    );

    const exam = data.get("exam");
    const title = data.get("title");
    const max_marks = data.get("max_marks");
    const questions = data.getAll("questions");
    const durationInMinutes = data.get("durationInMinutes");
    // const image = data.image;

    const questionIds = [];

    for (let i = 0; ; i++) {
      const text = data.get(`questions[${i}]text`);
      const image = data.get(`questions[${i}]image`);
      const category = data.get(`questions[${i}]category`);

      if (!text) {
        // If 'text' is not present, exit the loop
        break;
      }
      // Extract options (assuming two options)
      const option1Text = data.get(`questions[${i}]options[0].text`);
      const option1IsCorrect =
        data.get(`questions[${i}]options[0].isCorrect`) === "true";
      const option2Text = data.get(`questions[${i}]options[1].text`);
      const option2IsCorrect =
        data.get(`questions[${i}]options[1].isCorrect`) === "true";
      const option3Text = data.get(`questions[${i}]options[2].text`);
      const option3IsCorrect =
        data.get(`questions[${i}]options[2].isCorrect`) === "true";
      const option4Text = data.get(`questions[${i}]options[3].text`);
      const option4IsCorrect =
        data.get(`questions[${i}]options[3].isCorrect`) === "true";
      // Create a new question object

      const question = new Question({
        text,
        image,
        options: [
          { text: option1Text, isCorrect: option1IsCorrect },
          { text: option2Text, isCorrect: option2IsCorrect },
          { text: option3Text, isCorrect: option3IsCorrect },
          { text: option4Text, isCorrect: option4IsCorrect },
        ],
        category,
      });
      // Create and save the question
      await question.save();
      questionIds.push(question._id);
    }

    const test = new Test({
      exam,
      title,
      max_marks,
      questions: questionIds,
      durationInMinutes,
    });
    await test.save();
    return NextResponse.json({ success: true, data: test });
  } catch (error) {
    console.error("Error creating test series", error);
    return NextResponse.json({
      message: "Failed to Create Test Series",
    });
  }
}

export async function GET(request: Request) {
  try {
    // Retrieve test series data from your database, for example:
    const testSeries = await Test.find().populate("questions");

    return NextResponse.json({ success: true, data: testSeries });
  } catch (error) {
    console.error("Error retrieving test series", error);
    return NextResponse.json({
      message: "Failed to Retrieve Test Series",
    });
  }
}
