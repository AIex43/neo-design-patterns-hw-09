import { users } from "./data/UserData";
import { createExporters } from "./exporters/Exporter";

async function main() {
  const exporters = createExporters(users);
  await Promise.all(exporters.map(exporter => exporter.export()));
  console.log("Export completed.");
}

main();
