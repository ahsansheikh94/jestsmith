#!/usr/bin/env node
import { Command } from "commander";
import { runCLI } from "../src/cli/runCLI";
import { IBinArgs } from "../src/types/bin-args";

const program = new Command();

program
  .name("jest-genie")
  .description("Generate Jest test cases using AI for JS/TS files or folders")
  .argument("<path>", "File or directory path")
  .option("-d, --describe <desc>", "Optional description of module/purpose")
  .option(
    "-o, --out-dir <dir>",
    "Optional output directory to write the tests files to."
  )
  .action((path: string, options: Omit<IBinArgs, "path">) => {
    runCLI({ path, outDir: options["out-dir"], ...options });
  });

program.parse();
