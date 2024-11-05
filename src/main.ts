import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  console.log(`DB User: ${process.env.MYSQL_USER}`);
  console.log(`DB Password: ${process.env.MYSQL_PASSWORD}`);
  console.log(`DB Host: ${process.env.MYSQL_HOST || 'localhost'}`);
  console.log(`DB Name: ${process.env.MYSQL_DATABASE}`);
  
  const options = new DocumentBuilder()
    .setTitle('cat API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  await app.listen(3001);
}
bootstrap();
