import { Module } from '@nestjs/common';
import { CatsController } from 'src/cat_api/controllers/cat.api.controller';
import { CatApiClient } from './cat.api.client';
import { CatApiService } from './cat.api.service';
import { GetCatInfo } from 'src/cat_api/domain/use_cases/get.info';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModel } from 'src/cat_api/domain/entities/catmodel.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CatModel])],
  controllers: [CatsController],
  providers: [CatApiClient, CatApiService, GetCatInfo],
})
export class CatApiModule {}
