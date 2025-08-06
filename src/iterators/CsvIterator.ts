import fs from 'fs';
import { UserData } from '../data/UserData';

export class CsvIterator implements Iterable<UserData> {
  private data: UserData[];

  constructor(path: string) {
    const content = fs.readFileSync(path, 'utf-8');
    const lines = content.trim().split('\n').slice(1); // пропускаємо заголовок

    this.data = lines.map(line => {
      const [id, name, email, phone] = line.split(',');
      return {
        id: Number(id),
        name,
        email,
        phone,
      };
    });
  }

  *[Symbol.iterator](): Iterator<UserData> {
    for (const user of this.data) {
      yield user;
    }
  }
}
