import { MenuItemTypeModel } from './menuItemType';
import { OrderModel } from './order';

export class MenuItemModel {
  private readonly id: string;
  private readonly name: string;
  private readonly description: string;
  private readonly price: number;
  private readonly menuItemType: MenuItemTypeModel;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private readonly orders: OrderModel[];

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    menuItemType: MenuItemTypeModel,
    createdAt: Date,
    updatedAt: Date,
    orders: OrderModel[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.menuItemType = menuItemType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.orders = orders;
  }
}
