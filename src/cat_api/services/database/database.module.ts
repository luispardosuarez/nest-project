import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';
import { CatModel } from 'src/cat_api/domain/entities/catmodel.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'catapi',
      entities: [CatModel],
      synchronize: true,
    })],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
