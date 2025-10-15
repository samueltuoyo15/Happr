import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { BullModule } from '@nestjs/bullmq';
import { MailProcessor } from './mail.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: "email-queue",
      connection: {
        host: "localhost",
        port: 6379,
      }
    })
  ],
  providers: [MailService, MailProcessor],
  exports: [MailService]
})
export class MailModule {}
