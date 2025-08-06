import { DataExporter } from "./DataExporter";
import fs from "fs/promises";

export class CsvExporter extends DataExporter {
  protected render(): void {
    this.result = "id,name,email,phone\n" + this.data.map(
      u => `${u.id},${u.name},${u.email},${u.phone}`
    ).join("\n");
  }

  protected async save(): Promise<void> {
    await fs.writeFile("users.csv", this.result, "utf-8");
  }
}
