import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthUseCasesModule } from '../../use-cases/auth/auth.use-cases.module';
import { LoggerService } from '../logger/logger.service';

@Module({
  providers: [LoggerService],
  imports: [AuthUseCasesModule],
  controllers: [LoginController],
})
export class ControllerModule {}
