import { Controller, Get, Post, Req, Delete, Query, Param, HttpException } from '@nestjs/common';
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
  async addDicts(@Req() request: Request): Promise<Dict[]> {
    const dicts = request.body;
    const old = await this.dictsService.getDicts();
    let errData = null;
    if (dicts.every(de => {
      if (old.findIndex(of => of.id === de.id) === -1) return true;
      errData = de;
      return false;
    })) {
      return this.dictsService.addDicts(request.body); 
    }
    throw new HttpException(`标识符重复: { 名称: ${errData.name}, 标识符: ${errData.id} }`, 409);
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
