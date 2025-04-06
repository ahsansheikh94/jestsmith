import { OpenAI } from "openai";
import dotenv from "dotenv";
import cleanCodeBlock from "../utils/clean-code";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error("Missing OpenAI API key!");

const openai = new OpenAI({
  apiKey,
});

export async function generateTest(
  prompt: string,
  modal?: string
): Promise<string> {
  const res = await openai.chat.completions.create({
    model: modal || "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  return cleanCodeBlock(res.choices[0].message?.content || "") || "";
}
