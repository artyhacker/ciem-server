import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictsController } from './dicts/dicts.controller';
import { DictsService } from './dicts/dicts.service';

@Module({
  imports: [],
  controllers: [AppController, DictsController],
  providers: [AppService, DictsService],
})
export class AppModule {}
