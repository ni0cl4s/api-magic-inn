import { MenuItemModel } from '../../../models/menuItem';
import { AddMenuItemDto } from '../../../../infrastructure/controllers/menu-item/add-menu-item.dto';
import { UpdateMenuItemDto } from '../../../../infrastructure/controllers/menu-item/update-menu-item.dto';

export interface IMenuItemRepository {
  addMenuItem(addMenuItemDto: AddMenuItemDto): Promise<MenuItemModel>;

  getAllMenuItem(): Promise<MenuItemModel[]>;

  getMenuItemById(id: string): Promise<MenuItemModel>;

  updateMenuItem(
    id: string,
    updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<MenuItemModel>;

  deleteMenuItem(id: string): Promise<string>;
}
