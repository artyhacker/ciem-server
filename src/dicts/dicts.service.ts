import { Injectable } from '@nestjs/common';
import { Dict } from './dicts.interface';

@Injectable()
export class DictsService {
  private readonly dicts: Dict[] = [];

  getDicts() {
    return this.dicts;
  }

  addDicts(dicts: Dict[]) {
    this.dicts.push(...dicts);
  }
}
