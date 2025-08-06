import * as fs from 'fs';

export class CsvIterator implements Iterable<any> {
  private data: any[] = [];

  constructor(csvFilePath: string = 'users.csv') {
    const content = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = content.trim().split('\n');

    if (lines.length < 2) return;

    const headers = lines[0].split(',');

    this.data = lines.slice(1).map(line => {
      const values = line.split(',');
      const obj: any = {};
      headers.forEach((header, i) => {
        const trimmed = values[i]?.trim();
        obj[header] = isNaN(Number(trimmed)) ? trimmed : Number(trimmed);
      });
      return obj;
    });
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
