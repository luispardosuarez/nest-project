import { Module } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';
import { CatsController } from './cat.api.controller';
import { CatApiService } from './cat.api.service';

@Module({
  controllers: [CatsController],
  providers: [CatApiClient, CatApiService],
})
export class CatApiModule {}
