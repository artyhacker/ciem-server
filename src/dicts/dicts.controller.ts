import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DictsService } from './dicts.service';

@Controller('dicts')
export class DictsController {
  constructor(private dictsService: DictsService) { }

  @Get()
  getDicts(): object[] {
    return this.dictsService.getDicts();
  }

  @Post()
  addDicts(@Req() request: Request) {
    this.dictsService.addDicts(request.body);
    return this.dictsService.getDicts();
  }
}
