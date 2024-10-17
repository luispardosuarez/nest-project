import { Module } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';
import { CatsController } from './cat.api.controller';
import { CatApiService } from './cat.api.service';

@Module({
  providers: [CatApiClient, CatApiService],
  controllers: [CatsController],
})
export class CatApiModule {}
