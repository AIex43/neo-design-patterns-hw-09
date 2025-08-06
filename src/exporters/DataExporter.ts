import { User } from "../data/UserData";

export abstract class DataExporter {
  protected data: User[] = [];
  protected result: string = "";

  constructor(data: User[]) {
    this.data = data;
  }

  public async export(): Promise<void> {
    this.render();
    await this.save();
  }

  protected abstract render(): void;
  protected abstract save(): Promise<void>;
}
