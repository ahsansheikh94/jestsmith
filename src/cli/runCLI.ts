import { stat } from "fs/promises";
import { processFile } from "../core/processFile";
import { processFolder } from "../core/processFolder";
import { IBinArgs } from "../types/bin-args";

export async function runCLI(args: IBinArgs): Promise<void> {
  const { path } = args;
  const info = await stat(path);

  if (info.isFile()) {
    await processFile(args);
  } else if (info.isDirectory()) {
    await processFolder(args);
  } else {
    /* eslint-disable-next-line */
    console.error("Invalid path. Must be a file or directory.");
  }
}
