import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictsModule } from './dicts/dicts.module';

@Module({
  imports: [DictsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
