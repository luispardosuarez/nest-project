import { Module } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';
import { CatsController } from './cat.api.controller';
import { CatApiService } from './cat.api.service';
import { GetCatInfo } from './use_cases/get.info';

@Module({
  controllers: [CatsController],
  providers: [CatApiClient, CatApiService, GetCatInfo],
})
export class CatApiModule {}
