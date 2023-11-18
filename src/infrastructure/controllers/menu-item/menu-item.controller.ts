import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { HasRoles } from '../../common/decorators/role.decorator';
import { Role } from '@prisma/client';
import { RoleGuard } from '../../common/guards/role.guard';
import { AddMenuItemDto } from './add-menu-item.dto';
import { UpdateMenuItemDto } from './update-menu-item.dto';
import { MenuItemUseCases } from '../../../use-cases/menu-item/menu-item.use-cases';
import { MenuItemModel } from '../../../domain/models/menuItem';
import { LoggerService } from '../../logger/logger.service';

@Controller('menu-item')
@ApiBearerAuth()
@ApiTags('Menu Item')
@UseGuards(JwtGuard, RoleGuard)
export class MenuItemController {
  constructor(
    private readonly menuItemUseCases: MenuItemUseCases,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  @HasRoles(Role.ADMIN)
  async addMenuItem(
    @Body() addMenuItemDto: AddMenuItemDto,
  ): Promise<MenuItemModel> {
    this.loggerService.log('MenuItemController', `Attempting add menu item`);
    return await this.menuItemUseCases.addMenuItem(addMenuItemDto);
  }

  @Get()
  async getAllMenuItem(): Promise<MenuItemModel[]> {
    this.loggerService.log(
      'MenuItemController',
      `Attempting get all menu items`,
    );
    return await this.menuItemUseCases.getAllMenuItem();
  }

  @Get(':id')
  async getMenuItemById(@Param('id') id: string): Promise<MenuItemModel> {
    this.loggerService.log(
      'MenuItemController',
      `Attempting get menu item by id : ${id}`,
    );
    return await this.menuItemUseCases.getMenuItemById(id);
  }

  @Put(':id')
  @HasRoles(Role.ADMIN)
  async updateMenuItem(
    @Param('id') id: string,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<MenuItemModel> {
    this.loggerService.log(
      'MenuItemController',
      `Attempting update menu item with id : ${id}`,
    );
    return await this.menuItemUseCases.updateMenuItem(id, updateMenuItemDto);
  }

  @Delete(':id')
  @HasRoles(Role.ADMIN)
  async deleteMenuItem(@Param('id') id: string): Promise<string> {
    this.loggerService.log(
      'MenuItemController',
      `Attempting delete menu item with id : ${id}`,
    );
    return await this.menuItemUseCases.deleteMenuItem(id);
  }
}
