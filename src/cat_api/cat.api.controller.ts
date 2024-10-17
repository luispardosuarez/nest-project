import { Controller, Get } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';

@Controller('cats')
export class CatsController {
  constructor(private readonly catApiClient: CatApiClient) {}

  @Get('image')
  async get(): Promise<any> {
    return { imagURL: await this.catApiClient.get() };
  }
}
