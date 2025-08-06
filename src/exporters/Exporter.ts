import { User } from "../data/UserData";
import { CsvExporter } from "./CsvExporter";
import { JsonExporter } from "./JsonExporter";
import { XmlExporter } from "./XmlExporter";

export type Exporter = CsvExporter | JsonExporter | XmlExporter;

export function createExporters(data: User[]): Exporter[] {
  return [
    new CsvExporter(data),
    new JsonExporter(data),
    new XmlExporter(data)
  ];
}
