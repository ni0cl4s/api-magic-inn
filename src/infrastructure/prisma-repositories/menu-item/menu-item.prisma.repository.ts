import { Injectable } from '@nestjs/common';
import { IMenuItemRepository } from '../../../domain/interfaces/repositories/menu-item/menu-item.repository.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { AddMenuItemDto } from '../../controllers/menu-item/add-menu-item.dto';
import { MenuItemModel } from '../../../domain/models/menuItem';
import { UpdateMenuItemDto } from '../../controllers/menu-item/update-menu-item.dto';
import { MenuItemType } from '@prisma/client';

@Injectable()
export class MenuItemPrismaRepository implements IMenuItemRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async addMenuItem(addMenuItemDto: AddMenuItemDto): Promise<MenuItemModel> {
    let menuItemType: MenuItemType;
    try {
      if (addMenuItemDto.menuItemType === 'FOOD') {
        menuItemType = MenuItemType.FOOD;
      } else if (addMenuItemDto.menuItemType === 'DRINK') {
        menuItemType = MenuItemType.DRINK;
      }
      return await this.prismaService.menuItem.create({
        data: {
          name: addMenuItemDto.name,
          description: addMenuItemDto.description,
          price: addMenuItemDto.price,
          menuItemType: menuItemType,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteMenuItem(id: string): Promise<string> {
    try {
      await this.prismaService.menuItem.delete({
        where: {
          id: id,
        },
      });
      return `Menu Item : ${id} deleted successfully`;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllMenuItem(): Promise<MenuItemModel[]> {
    try {
      return await this.prismaService.menuItem.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getMenuItemById(id: string): Promise<MenuItemModel> {
    try {
      return await this.prismaService.menuItem.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateMenuItem(
    id: string,
    updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<MenuItemModel> {
    try {
      let menuItemType: MenuItemType;
      if (updateMenuItemDto.menuItemType === 'FOOD') {
        menuItemType = MenuItemType.FOOD;
      } else if (updateMenuItemDto.menuItemType === 'DRINK') {
        menuItemType = MenuItemType.DRINK;
      }
      return await this.prismaService.menuItem.update({
        where: {
          id: id,
        },
        data: {
          name: updateMenuItemDto.name,
          description: updateMenuItemDto.description,
          price: updateMenuItemDto.price,
          menuItemType: menuItemType,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
