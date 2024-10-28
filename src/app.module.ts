import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { CatApiModule } from './cat_api/cat.api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}), MathModule, CatApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
