import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from '../../../prisma/prisma.service';
import { UserService } from './user.service';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [  BullModule.registerQueue({
      name: "image-queue",
      connection: { url: process.env.REDIS_URL },
      defaultJobOptions: {
        attempts: 5,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: true,
        removeOnFail: false,
      },
    })],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})

export class UserModule {}
