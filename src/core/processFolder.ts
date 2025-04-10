import { readdir, stat } from "fs/promises";
import { join } from "path";
import { processFile } from "./processFile";
import { IBinArgs } from "../types/bin-args";

export async function processFolder(args: IBinArgs): Promise<void> {
  const { path: folderPath, ...rest } = args;
  const entries = await readdir(folderPath);

  for (const entry of entries) {
    const fullPath = join(folderPath, entry);
    const entryStat = await stat(fullPath);

    if (entryStat.isDirectory()) {
      await processFolder({ path: fullPath, ...rest }); // Recursively handle nested folders
    } else if (entryStat.isFile() && /\.(ts|tsx)$/.test(entry)) {
      await processFile({ path: fullPath, ...rest });
    }
  }
}
