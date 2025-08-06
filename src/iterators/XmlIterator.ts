import * as fs from 'fs';
import { DOMParser } from 'xmldom';

export class XmlIterator implements Iterable<any> {
  private data: any[] = [];

  constructor(xmlFilePath: string = 'users.xml') {
    const content = fs.readFileSync(xmlFilePath, 'utf-8');
    const doc = new DOMParser().parseFromString(content, 'text/xml');
    const userElements = doc.getElementsByTagName('user');

    for (let i = 0; i < userElements.length; i++) {
      const userElement = userElements[i];
      const user: any = {};

      for (let j = 0; j < userElement.childNodes.length; j++) {
        const node = userElement.childNodes[j];
        if (node.nodeType === 1) {
          const key = node.nodeName;
          const value = node.textContent?.trim() || '';
          user[key] = isNaN(Number(value)) ? value : Number(value);
        }
      }

      this.data.push(user);
    }
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
