import fs from 'fs';
import { UserData } from '../data/UserData';

export class JsonIterator implements Iterable<UserData> {
  private data: UserData[];

  constructor(path: string) {
    const content = fs.readFileSync(path, 'utf-8');
    this.data = JSON.parse(content);
  }

  *[Symbol.iterator]() {
    for (const user of this.data) yield user;
  }
}
