import fs from 'fs';
import { UserData } from '../data/UserData';
import { parseString } from 'xml2js';

export class XmlIterator implements Iterable<UserData> {
  private data: UserData[] = [];

  constructor(path: string) {
    const content = fs.readFileSync(path, 'utf-8');
    parseString(content, (err, result) => {
      if (err) throw err;
      this.data = result.users.user.map((u: any) => ({
        id: +u.id[0],
        name: u.name[0],
        email: u.email[0],
        phone: u.phone[0],
      }));
    });
  }

  *[Symbol.iterator]() {
    for (const user of this.data) yield user;
  }
}
