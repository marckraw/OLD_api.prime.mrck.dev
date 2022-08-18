import {Injectable } from '@nestjs/common';

@Injectable()
export class UtilPublicService {
  constructor() {}

  getData() {
    return {
      data: 'Public Data Test'
    }
  }
}
