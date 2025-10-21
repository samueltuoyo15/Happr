import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../../../prisma/prisma.service';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [JwtModule.register({ global: true }), 
      BullModule.registerQueue({
      name: "email-queue",
      connection: { url: process.env.REDIS_URL! },
      defaultJobOptions: {
        attempts: 5,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: true,
        removeOnFail: false,
      },
    }), 
  ],
  providers: [AuthService, PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
