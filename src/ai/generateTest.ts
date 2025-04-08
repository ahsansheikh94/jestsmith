import cleanCodeBlock from "../utils/clean-code";
import axios from "axios";

export async function generateTest(
  sourceCode: string,
  description: string
): Promise<string> {
  try {
    const res = await axios.post(
      "https://jestsmith-be.vercel.app/api/generate-tests",
      { sourceCode, description }
    );

    if (!res.data?.testCode) throw new Error("Error generating tests");
    return cleanCodeBlock(res.data?.testCode) || "";
  } catch (err) {
    console.log(err);
    throw err;
  }
}
