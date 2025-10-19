import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule } from "@nestjs/config"
import { MailModule } from './modules/mail/mail.module';
import { BullModule } from '@nestjs/bullmq';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), 
    BullModule.forRoot({
      connection: { url: process.env.REDIS_URL! },
      defaultJobOptions: {
      attempts: 10,
      backoff: { type: 'exponential', delay: 2000 },
      removeOnComplete: true,
      removeOnFail: false,
  }, 
    }),
    AuthModule, 
    MailModule,
    UserModule],
  providers: [PrismaService],
})

export class AppModule {}
