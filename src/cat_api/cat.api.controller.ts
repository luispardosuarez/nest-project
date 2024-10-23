import { Controller, Get, Query } from '@nestjs/common';
import { CatApiService } from './cat.api.service';
import { GetCatInfo } from './use_cases/get.info';
import { CatImageInputDTO } from './dto/catimage.input.dto';
import { CatImageOutputDto } from './dto/catimage.output.dto';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catApiService: CatApiService,
    private readonly getCatInfo: GetCatInfo,
  ) {}

  @Get('image')
  async getImage(@Query() input: CatImageInputDTO): Promise<CatImageOutputDto> {
    const image = await this.catApiService.getImage(input);

    if (input.hasBreeds) {
      const breedInfo = await this.getCatInfo.call(input);

      return {
        ...image,
        breeds: breedInfo,
      };
    }

    return image;
  }
}
