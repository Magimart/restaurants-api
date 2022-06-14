import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // for any custom api prefixes if desired
  //  app.setGlobalPrefix("api")
  // adds clobal validation to to the app
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
