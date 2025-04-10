import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs-extra";

export async function writeTestFile(
  originalPath: string,
  testContent: string
): Promise<void> {
  await writeFile(originalPath, testContent);
  /* eslint-disable-next-line */
  console.log(`✅ Test generated: ${originalPath}`);
}

export function getOutputPath(
  originalFilePath: string,
  outDir?: string
): string {
  const ext = path.extname(originalFilePath);
  const baseName = path.basename(originalFilePath, ext);
  const testFileName = `${baseName}.test${ext}`;

  if (outDir) {
    // Preserve folder structure
    const relativePath = path.relative(
      process.cwd(),
      path.dirname(originalFilePath)
    );
    const outputDir = path.join(outDir, relativePath);
    fs.ensureDirSync(outputDir);
    return path.join(outputDir, testFileName);
  }

  return path.join(path.dirname(originalFilePath), testFileName);
}
