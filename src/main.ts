import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DogModule } from './dog/dog.module';

async function bootstrap() {
  const app = await NestFactory.create(DogModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
