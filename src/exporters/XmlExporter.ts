import { DataExporter } from './DataExporter';
import fs from 'fs/promises';

export class XmlExporter extends DataExporter {
  protected render(): void {
    this.result =
      '<?xml version="1.0"?>\n<users>\n' +
      this.data.map(u =>
        `  <user>\n` +
        `    <id>${u.id}</id>\n` +
        `    <name>${u.name}</name>\n` +
        `    <email>${u.email}</email>\n` +
        `    <phone>${u.phone}</phone>\n` +
        `  </user>`
      ).join('\n') +
      '\n</users>';
  }

  protected async save(): Promise<void> {
    await fs.writeFile('users.xml', this.result, 'utf-8');
  }
}
