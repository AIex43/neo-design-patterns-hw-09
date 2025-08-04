import axios from 'axios';
import fs from 'fs';
import { UserData } from '../data/UserData';

export abstract class DataExporter {
  protected data: UserData[] = [];
  protected result: string = '';

  async export(): Promise<void> {
    await this.load();
    this.transform();
    this.beforeRender();
    this.render();
    this.afterRender();
    await this.save();
  }

  protected async load(): Promise<void> {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.data = res.data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    }));
  }

  protected transform(): void {
    this.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  protected beforeRender(): void {}
  protected abstract render(): void;
  protected afterRender(): void {}
  protected abstract save(): Promise<void>;
}
