import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetCatInfo } from '../domain/use_cases/get.info';
import { CatImageInputDTO } from '../domain/dto/catimage.input.dto';
import { CatImageOutputDto } from '../domain/dto/catimage.output.dto';
import { CatModel } from '../domain/entities/catmodel.entity';
import { CatApiService } from '../services/cats/cat.api.service';



@Controller('cats')
export class CatsController {
  constructor(
    private readonly getCatInfo: GetCatInfo,
    private readonly catApiService: CatApiService,
  ) {}

  @Get('image')
  async getImage(@Query() input: CatImageInputDTO): Promise<CatImageOutputDto> {
    return await this.getCatInfo.call(input);
  }

  @Post('add')
  async addCat(@Body() catData: Partial<CatModel>): Promise<CatModel> {
    return await this.catApiService.addCat(catData);
  }

}
