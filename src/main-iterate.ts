import { CsvIterator } from "./iterators/CsvIterator";
import { JsonIterator } from "./iterators/JsonIterator";
import { XmlIterator } from "./iterators/XmlIterator";

console.log("--- CSV ---");
for (const row of new CsvIterator()) {
  console.log(row);
}

console.log("\n--- JSON ---");
for (const user of new JsonIterator()) {
  console.log(user);
}

console.log("\n--- XML ---");
for (const user of new XmlIterator()) {
  console.log(user);
}
