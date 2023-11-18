import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { RoomUseCases } from './room.use-cases';
import { RoomPrismaRepository } from '../../infrastructure/prisma-repositories/room/room.prisma.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'IRoomRepository',
      useClass: RoomPrismaRepository,
    },
    RoomUseCases,
    LoggerService,
  ],
  exports: [RoomUseCases],
})
export class RoomUseCasesModule {}
