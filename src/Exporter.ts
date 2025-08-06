export interface Exporter {
  export(): Promise<void>;
}
