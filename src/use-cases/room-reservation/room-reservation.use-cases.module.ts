import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { RoomReservationUseCases } from './room-reservation.use-cases';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { RoomReservationPrismaRepository } from '../../infrastructure/prisma-repositories/room-reservation/room-reservation.prisma.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'IRoomReservationRepository',
      useClass: RoomReservationPrismaRepository,
    },
    RoomReservationUseCases,
    LoggerService,
  ],
  exports: [RoomReservationUseCases],
})
export class RoomReservationUseCasesModule {}
