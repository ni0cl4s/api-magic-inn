import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthUseCasesModule } from '../../use-cases/auth/auth.use-cases.module';
import { LoggerService } from '../logger/logger.service';
import { SignupController } from './signup/signup.controller';

@Module({
  providers: [LoggerService],
  imports: [AuthUseCasesModule],
  controllers: [LoginController, SignupController],
})
export class ControllerModule {}
