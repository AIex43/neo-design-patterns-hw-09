import { Exporter } from '../interfaces/Exporter';
import { UserData } from '../data/UserData';
import fs from 'fs';

export class JsonExporter extends Exporter {
  protected convert(data: UserData[]): string {
    return JSON.stringify(data, null, 2);
  }
}
