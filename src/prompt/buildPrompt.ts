export function buildPrompt(code: string, description = ""): string {
  return `
  You are an expert NestJS/Jest testing engineer.
  Write unit or integration test cases in Jest for the following TypeScript and/or JavaScript code. Make sure to write each and every test case possible ensuring atleast 90% code coverage of the given code.
  ${description ? `\nDescription: ${description}` : ""}
  \`\`\`ts
  ${code}
  \`\`\`
  Only output the test code. Do not explain anything. and output the code in text, DO NOT use any markdown syntax
  `;
}
