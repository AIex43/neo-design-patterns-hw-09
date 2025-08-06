import fs from "fs";
import { DOMParser } from "xmldom";

export class XmlIterator implements Iterable<any> {
  private users: Element[];

  constructor() {
    const content = fs.readFileSync("users.xml", "utf-8");
    const doc = new DOMParser().parseFromString(content, "text/xml");
    this.users = Array.from(doc.getElementsByTagName("user"));
  }

  *[Symbol.iterator]() {
    for (const user of this.users) {
      yield {
        id: user.getElementsByTagName("id")[0].textContent,
        name: user.getElementsByTagName("name")[0].textContent,
        email: user.getElementsByTagName("email")[0].textContent,
        phone: user.getElementsByTagName("phone")[0].textContent
      };
    }
  }
}
