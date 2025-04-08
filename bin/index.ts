#!/usr/bin/env node
import { Command } from "commander";
import { runCLI } from "../src/cli/runCLI";

const program = new Command();

program
  .name("jest-genie")
  .description("Generate Jest test cases using AI for JS/TS files or folders")
  .argument("<path>", "File or directory path")
  .option("-d, --describe <desc>", "Optional description of module/purpose")
  .action((path, options) => {
    runCLI(path, options.describe);
  });

program.parse();
