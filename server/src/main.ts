import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: [process.env.FRONTEND_DOMAIN],
    credentials: true
  })

  const config = new DocumentBuilder()
    .setTitle('Happr API')
    .setDescription('API documentation for Happr backend')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    })
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document, {
    jsonDocumentUrl: 'docs/json'
  })

  app.useLogger(new Logger())
  await app.listen(process.env.PORT ?? 5000)
}

bootstrap()
