import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { JwtServiceModule } from './infrastructure/services/jwt/jwt.module';
import { ControllerModule } from './infrastructure/controllers/controller.module';
import { JwtStrategy } from './infrastructure/common/strategies/jwt.strategy';
import { PrismaModule } from './infrastructure/prisma/prisma.module';

@Module({
  imports: [ControllerModule, LoggerModule, JwtServiceModule, PrismaModule],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
