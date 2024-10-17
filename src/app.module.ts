import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { CatApiClient } from './cat_api/cat.api.client';
import { CatsController } from './cat_api/cat.api.controller';

@Module({
  imports: [MathModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatApiClient],
})
export class AppModule {}
