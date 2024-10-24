import { Controller, Get, Query } from '@nestjs/common';
import { GetCatInfo } from './use_cases/get.info';
import { CatImageInputDTO } from './dto/catimage.input.dto';
import { CatImageOutputDto } from './dto/catimage.output.dto';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly getCatInfo: GetCatInfo,
  ) {}

  @Get('image')
  async getImage(@Query() input: CatImageInputDTO): Promise<CatImageOutputDto> {
    return await this.getCatInfo.call(input);
  }
}
