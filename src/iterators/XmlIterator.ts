import fs from 'fs';
import { xml2js } from 'xml-js';
import { UserData } from '../data/UserData';

export class XmlIterator implements Iterable<UserData> {
  private data: UserData[];

  constructor(path: string) {
    const content = fs.readFileSync(path, 'utf-8');
    const parsed = xml2js(content, { compact: true }) as any;

    this.data = (parsed.users.user || []).map((u: any) => ({
      id: Number(u.id._text),
      name: u.name._text,
      email: u.email._text,
      phone: u.phone._text,
    }));
  }

  *[Symbol.iterator](): Iterator<UserData> {
    for (const user of this.data) {
      yield user;
    }
  }
}
