import { stat } from "fs/promises";
import { processFile } from "../core/processFile";
import { processFolder } from "../core/processFolder";

export async function runCLI(
  path: string,
  description?: string
): Promise<void> {
  const info = await stat(path);

  if (info.isFile()) {
    await processFile(path, description);
  } else if (info.isDirectory()) {
    await processFolder(path, description);
  } else {
    console.error("Invalid path. Must be a file or directory.");
  }
}
