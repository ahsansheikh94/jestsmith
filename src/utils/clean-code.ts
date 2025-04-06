function cleanCodeBlock(code: string): string {
  return code
    .replace(/^```[a-z]*\n?/i, "") // remove opening ```
    .replace(/```$/, "") // remove closing ```
    .trim(); // remove extra spaces
}
export default cleanCodeBlock;
