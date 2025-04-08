import { readFile } from "fs/promises";
import { buildPrompt } from "../prompt/buildPrompt";
import { generateTest } from "../ai/generateTest";
import { writeTestFile } from "../utils/fileUtils";

export async function processFile(
  filePath: string,
  description?: string
): Promise<void> {
  if (
    ["ts", "tsx", "js", "jsx"].includes(filePath.split(".")[1]) &&
    !filePath.includes("style")
  ) {
    console.log("Generating tests for: ", filePath);
    const sourceCode = await readFile(filePath, "utf-8");
    const testCode = await generateTest(sourceCode, description || "");

    await writeTestFile(filePath, testCode);
  } else {
    console.log("Skipping tests for a non js/ts or a styles file: ", filePath);
  }
}
