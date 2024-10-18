import { Controller, Get } from '@nestjs/common';
import { CatApiService } from './cat.api.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catApiService: CatApiService) {}

  @Get('image')
  async get(): Promise<any> {
    return await this.catApiService.getImage();
  }
}
