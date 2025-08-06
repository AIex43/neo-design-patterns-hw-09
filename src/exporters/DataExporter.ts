import { Exporter } from './Exporter';

export abstract class DataExporter implements Exporter {
  protected data: any[] = [];
  protected result: string = '';

  async export(): Promise<void> {
    this.loadData();
    this.render();
    await this.save();
  }

  protected loadData(): void {
    // У реальному проєкті тут можна було б завантажувати з БД або API.
    this.data = [
      { id: 1, name: "Alice", email: "alice@example.com", phone: "123456789" },
      { id: 2, name: "Bob", email: "bob@example.com", phone: "987654321" },
    ];
  }

  protected abstract render(): void;
  protected abstract save(): Promise<void>;
}
