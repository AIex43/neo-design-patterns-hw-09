import fs from "fs";

export class CsvIterator implements Iterable<string> {
  private lines: string[];

  constructor() {
    const content = fs.readFileSync("users.csv", "utf-8");
    this.lines = content.split("\n").slice(1); // skip header
  }

  *[Symbol.iterator]() {
    for (const line of this.lines) {
      yield line;
    }
  }
}
