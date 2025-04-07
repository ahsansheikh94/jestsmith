import { writeFile } from "fs/promises";
import { dirname, join, basename } from "path";
import path from "path";
import { mkdir } from "fs/promises";

function getTestFilePath(inputPath: string): string {
  const ext = path.extname(inputPath); // .ts, .js, .tsx, .jsx
  const base = path.basename(inputPath, ext); // filename without extension
  const testFileName = `${base}.test${ext}`; // keep original ext

  return testFileName;
}

export async function writeTestFile(
  originalPath: string,
  testContent: string
): Promise<void> {
  const testDir = join(dirname(originalPath), "__tests__");
  await mkdir(testDir, { recursive: true });

  const fileName = getTestFilePath(originalPath);
  const testPath = join(testDir, fileName);

  await writeFile(testPath, testContent);
  console.log(`✅ Test generated: ${testPath}`);
}
