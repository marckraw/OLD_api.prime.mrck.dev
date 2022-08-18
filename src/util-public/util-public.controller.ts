import {
  Controller,
  Get,
} from '@nestjs/common';
import { UtilPublicService } from './util-public.service';

@Controller('util-public')
export class UtilPublicController {
  constructor(private utilPublicService: UtilPublicService) {}

  @Get('')
  getData() {
    return this.utilPublicService.getData()
  }
}
