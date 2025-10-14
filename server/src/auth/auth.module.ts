import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [ControllerModule, ServiceModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
