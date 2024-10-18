import { Controller, Get } from '@nestjs/common';
import { CatApiService } from './cat.api.service';
import { CatImageDto } from './dto/catimage.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catApiService: CatApiService) {}

  @Get('image')
  async get(): Promise<CatImageDto> {
    return await this.catApiService.getImage();
  }
}
