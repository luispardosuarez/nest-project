import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { CatApiModule } from './cat_api/cat.api.module';

@Module({
  imports: [MathModule, CatApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
