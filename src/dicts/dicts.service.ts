import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dict } from './dict.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DictsService {
  constructor(
    @InjectRepository(Dict)
    private dictsRepository: Repository<Dict>,
  ) {}

  async getDicts(): Promise<Dict[]> {
    return this.dictsRepository.find();
  }

  async addDicts(dicts: Dict[]): Promise<Dict[]> {
    await this.dictsRepository.insert(dicts).catch(e => {
      console.log(e);
    });
    return this.dictsRepository.find();
  }

  async delDict(id: string) {
    await this.dictsRepository.delete(id);
    return '';
  }
}
