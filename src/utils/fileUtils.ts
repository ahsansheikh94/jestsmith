import { writeFile } from "fs/promises";
import { dirname, join, basename } from "path";
import { mkdir } from "fs/promises";

export async function writeTestFile(
  originalPath: string,
  testContent: string
): Promise<void> {
  const testDir = join(dirname(originalPath), "__tests__");
  await mkdir(testDir, { recursive: true });

  const fileName = basename(originalPath).replace(/\.(ts|tsx)$/, ".test.ts");
  const testPath = join(testDir, fileName);

  await writeFile(testPath, testContent);
}
