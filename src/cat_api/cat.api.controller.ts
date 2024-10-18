import { Controller, Get, Query } from '@nestjs/common';
import { CatApiService } from './cat.api.service';
import { CatImageInputDTO } from './dto/catimage.input.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catApiService: CatApiService) {}

  @Get('image')
  async getImage(@Query() input: CatImageInputDTO) {
    return await this.catApiService.getImage(input);
  }
}
