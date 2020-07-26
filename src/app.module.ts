import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictsController } from './dicts/dicts.controller';

@Module({
  imports: [],
  controllers: [AppController, DictsController],
  providers: [AppService],
})
export class AppModule {}
