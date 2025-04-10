import { readFile } from "fs/promises";
import { buildPrompt } from "../prompt/buildPrompt";
import { generateTest } from "../ai/generateTest";
import { getOutputPath, writeTestFile } from "../utils/fileUtils";
import { IBinArgs } from "../types/bin-args";

export async function processFile(args: IBinArgs): Promise<void> {
  const { path: filePath, ...rest } = args;

  if (
    ["ts", "tsx", "js", "jsx"].includes(filePath.split(".")[1]) &&
    !filePath.includes("style")
  ) {
    console.log("Generating tests for: ", filePath);
    const sourceCode = await readFile(filePath, "utf-8");
    const testCode = await generateTest({ sourceCode, ...rest });

    const outputPath = getOutputPath(filePath, rest.outDir);

    await writeTestFile(outputPath, testCode);
  } else {
    console.log("Skipping tests for a non js/ts or a styles file: ", filePath);
  }
}
