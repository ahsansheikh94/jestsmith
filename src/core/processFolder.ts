import { readdir, stat } from "fs/promises";
import { join } from "path";
import { processFile } from "./processFile";

export async function processFolder(
  folderPath: string,
  description?: string
): Promise<void> {
  const entries = await readdir(folderPath);

  for (const entry of entries) {
    const fullPath = join(folderPath, entry);
    const entryStat = await stat(fullPath);

    if (entryStat.isDirectory()) {
      await processFolder(fullPath, description); // Recursively handle nested folders
    } else if (entryStat.isFile() && /\.(ts|tsx)$/.test(entry)) {
      await processFile(fullPath, description);
    }
  }
}
