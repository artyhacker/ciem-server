import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DictsService } from './dicts.service';
import { Dict } from './dict.entity';

@Controller('dicts')
export class DictsController {
  constructor(private dictsService: DictsService) { }

  @Get()
  getDicts(): Promise<Dict[]> {
    return this.dictsService.getDicts();
  }

  @Post()
  addDicts(@Req() request: Request): Promise<Dict[]> {
    return this.dictsService.addDicts(request.body);
  }
}
