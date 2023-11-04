import { LoggerService } from '../../infrastructure/logger/logger.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MenuItemUseCases } from './menu-item.use-cases';
import { MenuItemPrismaRepository } from '../../infrastructure/prisma-repositories/menu-item/menu-item.prisma.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'IMenuItemRepository',
      useClass: MenuItemPrismaRepository,
    },
    MenuItemUseCases,
    LoggerService,
  ],
  exports: [MenuItemUseCases],
})
export class MenuItemUseCasesModule {}
