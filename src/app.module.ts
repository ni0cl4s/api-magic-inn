import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { JwtServiceModule } from './infrastructure/services/jwt/jwt.module';
import { ControllerModule } from './infrastructure/controllers/controller.module';

@Module({
  imports: [ControllerModule, LoggerModule, JwtServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
