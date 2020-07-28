import { Module } from '@nestjs/common';
import { DictsController } from './dicts.controller';
import { DictsService } from './dicts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dict } from './dict.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dict])],
  controllers: [DictsController],
  providers: [DictsService],
})
export class DictsModule {}
