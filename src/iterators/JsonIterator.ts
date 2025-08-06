import * as fs from 'fs';

export class JsonIterator implements Iterable<any> {
  private data: any[] = [];

  constructor(jsonFilePath: string = 'users.json') {
    const content = fs.readFileSync(jsonFilePath, 'utf-8');
    this.data = JSON.parse(content);
  }

  [Symbol.iterator](): Iterator<any> {
    let index = 0;
    const data = this.data;

    return {
      next(): IteratorResult<any> {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { value: null, done: true };
        }
      }
    };
  }
}
