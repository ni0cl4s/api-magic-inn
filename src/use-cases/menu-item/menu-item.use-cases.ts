import { Inject, Injectable } from '@nestjs/common';
import { MenuItemModel } from '../../domain/models/menuItem';
import { AddMenuItemDto } from '../../infrastructure/controllers/menu-item/add-menu-item.dto';
import { UpdateMenuItemDto } from '../../infrastructure/controllers/menu-item/update-menu-item.dto';
import { IMenuItemRepository } from '../../domain/interfaces/repositories/menu-item/menu-item.repository.interface';
import { LoggerService } from '../../infrastructure/logger/logger.service';

@Injectable()
export class MenuItemUseCases {
  constructor(
    @Inject('IMenuItemRepository')
    private readonly menuItemRepository: IMenuItemRepository,
    private readonly loggerService: LoggerService,
  ) {}

  async addMenuItem(addMenuItemDto: AddMenuItemDto): Promise<MenuItemModel> {
    const addedMenuItem: MenuItemModel =
      await this.menuItemRepository.addMenuItem(addMenuItemDto);
    if (!addedMenuItem) {
      throw new Error('Failed to add menu item');
    } else {
      this.loggerService.log(
        'MenuItemUseCases',
        `Menu item added successfully`,
      );
      return addedMenuItem;
    }
  }

  async getAllMenuItem(): Promise<MenuItemModel[]> {
    const menuItems: MenuItemModel[] =
      await this.menuItemRepository.getAllMenuItem();
    if (!menuItems) {
      throw new Error('Failed to get all menu items');
    } else {
      this.loggerService.log(
        'MenuItemUseCases',
        `Get all menu items successfully`,
      );
      return menuItems;
    }
  }

  async getMenuItemById(id: string): Promise<MenuItemModel> {
    const menuItem: MenuItemModel =
      await this.menuItemRepository.getMenuItemById(id);
    if (!menuItem) {
      throw new Error(`Failed to get menu item with id : ${id}`);
    } else {
      this.loggerService.log(
        'MenuItemUseCases',
        `Get menu item with id : ${id} successfully`,
      );
      return menuItem;
    }
  }

  async updateMenuItem(
    id: string,
    updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<MenuItemModel> {
    const uddatedMenuItem: MenuItemModel =
      await this.menuItemRepository.updateMenuItem(id, updateMenuItemDto);
    if (!uddatedMenuItem) {
      throw new Error(`Failed to update menu item with id : ${id}`);
    } else {
      this.loggerService.log(
        'MenuItemUseCases',
        `Update menu item with id : ${id} successfully`,
      );
      return uddatedMenuItem;
    }
  }

  async deleteMenuItem(id: string): Promise<string> {
    const deleteString: string =
      await this.menuItemRepository.deleteMenuItem(id);
    if (!deleteString) {
      throw new Error(`Failed to delete menu item with id : ${id}`);
    } else {
      this.loggerService.log(
        'MenuItemUseCases',
        `Delete menu item with id : ${id} successfully`,
      );
      return deleteString;
    }
  }
}
