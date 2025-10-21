import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import cookieParser from "cookie-parser"
import helmet from "helmet"
import { Request, Response, NextFunction } from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(helmet())
  app.enableCors({
    origin: [process.env.FRONTEND_DOMAIN],
    credentials: true
  })
  app.use(cookieParser())
  app.setGlobalPrefix("api/v1")

  const SWAGGER_AUTH_USER = process.env.SWAGGER_AUTH_USER!
  const SWAGGER_AUTH_PASS = process.env.SWAGGER_AUTH_PASS!

  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    const auth = { username: SWAGGER_AUTH_USER, password: SWAGGER_AUTH_PASS } 
    const b64auth = (req.headers?.authorization || "").split(" ")[1]
   
    let username = ""
    let password = ""

    try{
     [username, password] = Buffer.from(b64auth, "base64").toString("utf-8").split(":")
    } catch {}
    
    if(username && password && username === auth.username && password === auth.password) {
      return next()
    }

    res.set("WWW-Authenticate", "Basic realm='Swagger UI'")
    res.status(401).send("Authentication required!")
  })

  const config = new DocumentBuilder()
    .setTitle('Happr API')
    .setDescription('API documentation for Happr')
    .setVersion('1.0')
    .addServer(process.env.BACKEND_DOMAIN!)
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }).build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/', app, document, {
    jsonDocumentUrl: 'docs/json'
  })

  app.useLogger(new Logger())
  await app.listen(process.env.PORT ?? 5000)
}

bootstrap()
