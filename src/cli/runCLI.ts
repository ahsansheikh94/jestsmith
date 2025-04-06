import { stat } from "fs/promises";
import { processFile } from "../core/processFile";
import { processFolder } from "../core/processFolder";

export async function runCLI(
  path: string,
  description?: string,
  modal?: string
): Promise<void> {
  const info = await stat(path);

  if (info.isFile()) {
    await processFile(path, description, modal);
  } else if (info.isDirectory()) {
    await processFolder(path, description, modal);
  } else {
    console.error("Invalid path. Must be a file or directory.");
  }
}
