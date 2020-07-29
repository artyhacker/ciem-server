import { Controller, Get, Post, Req, Delete, Query, Param } from '@nestjs/common';
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

  // @Delete()
  // delDict(@Query('id') id) {
  //   return this.dictsService.delDict(id);
  // }
  
  @Delete(':id')
  delDict(@Param('id') id) {
    return this.dictsService.delDict(id);
  }
}
