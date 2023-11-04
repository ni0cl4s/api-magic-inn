import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthUseCasesModule } from '../../use-cases/auth/auth.use-cases.module';
import { LoggerService } from '../logger/logger.service';
import { SignupController } from './signup/signup.controller';
import { MenuItemController } from './menu-item/menu-item.controller';
import { MenuItemUseCasesModule } from '../../use-cases/menu-item/menu-item.use-cases.module';

@Module({
  providers: [LoggerService],
  imports: [AuthUseCasesModule, MenuItemUseCasesModule],
  controllers: [LoginController, SignupController, MenuItemController],
})
export class ControllerModule {}