import { connectToDB } from "../../utils/database";
import Feedback from "@/models/feedback";

export const POST = async (req, res) => {
  const {name, message} = await req.json();

  try {
    await connectToDB();
    const newFeedback = new Feedback({
      name,
      message
    })

    await newFeedback.save();

    return new Response(
      JSON.stringify(newFeedback), 
      {status: 201}
    )
  } catch (error) {
    return new Response(
      "Failed to send Feedback.", 
      {status: 500}
    )
  }
}