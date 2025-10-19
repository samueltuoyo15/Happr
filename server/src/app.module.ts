import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule } from "@nestjs/config"
import { MailModule } from './modules/mail/mail.module';
import { BullModule } from '@nestjs/bullmq';
import { UserModule } from './modules/user/user.module';
import { ThrottlerGuard, ThrottlerModule, throttlers } from "@nestjs/throttler"
import { APP_GUARD } from '@nestjs/core';

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
    ThrottlerModule.forRoot({ throttlers: [{ ttl: 10, limit: 5 }] }),
    AuthModule, 
    MailModule,
    UserModule],
  providers: [PrismaService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})

export class AppModule {}
