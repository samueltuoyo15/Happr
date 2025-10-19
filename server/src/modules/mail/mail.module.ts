import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { BullModule } from '@nestjs/bullmq';
import { MailWorker } from '../../workers/mail.worker';

@Module({
  imports: [
    BullModule.registerQueue({
      name: "email-queue",
      connection: { url: process.env.REDIS_URL },
      defaultJobOptions: {
        attempts: 5,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: true,
        removeOnFail: false,
      },
    })
  ],
  providers: [MailService, MailWorker],
  exports: [MailService]
})
export class MailModule {}
