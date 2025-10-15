import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.FRONTEND_DOMAIN],
    credentials: true,
  })
  app.useLogger(new Logger());
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
