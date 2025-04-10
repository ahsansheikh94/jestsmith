import { IGenerateTestsArgs } from "../types/bin-args";
import cleanCodeBlock from "../utils/clean-code";
import axios, { AxiosResponse } from "axios";

export async function generateTest(args: IGenerateTestsArgs): Promise<string> {
  try {
    const { sourceCode, describe } = args;
    const res: AxiosResponse<{ testCode: string }> = await axios.post(
      "https://jestsmith-be.vercel.app/api/generate-tests",
      { sourceCode, description: describe }
    );

    if (!res.data?.testCode) throw new Error("Error generating tests");
    return cleanCodeBlock(res.data?.testCode) || "";
  } catch (err) {
    /* eslint-disable-next-line */
    console.log(err);
    throw err;
  }
}
