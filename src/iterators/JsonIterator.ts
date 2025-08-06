import fs from "fs";

export class JsonIterator implements Iterable<any> {
  private data: any[];

  constructor() {
    const content = fs.readFileSync("users.json", "utf-8");
    this.data = JSON.parse(content);
  }

  *[Symbol.iterator]() {
    for (const item of this.data) {
      yield item;
    }
  }
}
