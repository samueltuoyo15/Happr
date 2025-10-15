import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule } from "@nestjs/config"
import { MailModule } from './modules/mail/mail.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, MailModule],
  providers: [PrismaService],
})
export class AppModule {}
