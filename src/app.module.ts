import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { JwtServiceModule } from './infrastructure/services/jwt/jwt.module';

@Module({
  imports: [LoggerModule, JwtServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
