import { readFile } from "fs/promises";
import { buildPrompt } from "../prompt/buildPrompt";
import { generateTest } from "../ai/generateTest";
import { writeTestFile } from "../utils/fileUtils";

export async function processFile(
  filePath: string,
  description?: string,
  modal?: string
): Promise<void> {
  const sourceCode = await readFile(filePath, "utf-8");
  const prompt = buildPrompt(sourceCode, description);
  const testCode = await generateTest(prompt, modal);

  await writeTestFile(filePath, testCode);
}
