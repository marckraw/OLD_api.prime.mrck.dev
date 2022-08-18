import { Module } from '@nestjs/common';
import { UtilPublicController } from './util-public.controller';
import { UtilPublicService } from './util-public.service';

@Module({
  controllers: [UtilPublicController],
  providers: [UtilPublicService],
})
export class UtilPublicModule {}
