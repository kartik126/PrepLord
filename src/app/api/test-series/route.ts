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

    const title = data.get("title");
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

      // Create a new question object
      const question = new Question({
        text,
        image,
        options: [
          { text: option1Text, isCorrect: option1IsCorrect },
          { text: option2Text, isCorrect: option2IsCorrect },
          // Add more options if needed
        ],
        category,
      });
      // Create and save the question
      await question.save();
      questionIds.push(question._id);
    }

    const test = new Test({
      title,
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
