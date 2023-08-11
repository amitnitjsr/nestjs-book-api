import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Bookstore API')
    .setDescription('API for managing books in the bookstore')
    .setVersion('1.0')
    .addTag('books')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
}
bootstrap();
