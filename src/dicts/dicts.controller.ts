import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('dicts')
export class DictsController {
  @Get()
  getDicts(): object[] {
    return [
      { id: 1, name: 'dict1' },
      { id: 2, name: 'dict2' },
    ];
  }

  @Post()
  postDicts(@Req() request: Request) {
    return request.body;
  }
}
