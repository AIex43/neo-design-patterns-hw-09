import { DataExporter } from "./DataExporter";
import fs from "fs/promises";

export class XmlExporter extends DataExporter {
  protected render(): void {
    const items = this.data.map(
      u => `  <user><id>${u.id}</id><name>${u.name}</name><email>${u.email}</email><phone>${u.phone}</phone></user>`
    ).join("\n");
    this.result = `<users>\n${items}\n</users>`;
  }

  protected async save(): Promise<void> {
    await fs.writeFile("users.xml", this.result, "utf-8");
  }
}
