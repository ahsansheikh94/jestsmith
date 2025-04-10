interface IBinArgs {
  path: string;
  describe?: string;
  outDir?: string;
  "out-dir"?: string;
}

interface IGenerateTestsArgs extends Omit<IBinArgs, "path"> {
  sourceCode: string;
}

export { IBinArgs, IGenerateTestsArgs };
