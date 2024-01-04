import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthUseCasesModule } from '../../use-cases/auth/auth.use-cases.module';
import { LoggerService } from '../logger/logger.service';
import { SignupController } from './signup/signup.controller';
import { MenuItemController } from './menu-item/menu-item.controller';
import { MenuItemUseCasesModule } from '../../use-cases/menu-item/menu-item.use-cases.module';
import { RoomUseCasesModule } from '../../use-cases/room/room.use-cases.module';
import { RoomController } from './room/room.controller';
import { RoomReservationUseCasesModule } from '../../use-cases/room-reservation/room-reservation.use-cases.module';
import { RoomReservationController } from './room-reservation/room-reservation.controller';

@Module({
  providers: [LoggerService],
  imports: [
    AuthUseCasesModule,
    MenuItemUseCasesModule,
    RoomUseCasesModule,
    RoomReservationUseCasesModule,
  ],
  controllers: [
    LoginController,
    SignupController,
    MenuItemController,
    RoomController,
    RoomReservationController,
  ],
})
export class ControllerModule {}
