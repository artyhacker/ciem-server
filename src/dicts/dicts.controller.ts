import { Controller, Get } from '@nestjs/common';

@Controller('dicts')
export class DictsController {
  @Get()
  getDicts(): object[] {
    return [
      { id: 1, name: 'dict1' },
      { id: 2, name: 'dict2' },
    ];
  }
}
