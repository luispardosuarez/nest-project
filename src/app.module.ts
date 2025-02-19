import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { CatApiModule } from './cat_api/services/cats/cat.api.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './cat_api/services/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MathModule,
    CatApiModule,
    CacheModule.register({
      ttl: 300,
      max: 20,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
