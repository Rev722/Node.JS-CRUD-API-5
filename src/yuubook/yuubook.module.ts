import { Module } from '@nestjs/common';
import { YuubookController } from './yuubook.controller';
import { YuubookService } from './yuubook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YuubookSchema } from './schemas/yuubook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Yuubook', schema: YuubookSchema }])],
  controllers: [YuubookController],
  providers: [YuubookService]
})
export class YuubookModule {}
