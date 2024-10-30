import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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

  @Put(':id')
  async updateCat(@Param('id') id: string, @Body() catData: Partial<CatModel>): Promise<CatModel> {
    return await this.catApiService.updateCat(id, catData);
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string): Promise<void> {
    await this.catApiService.deleteCat(id);
  }

}
