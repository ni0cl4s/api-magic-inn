export class MenuItemModel {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly price: number;
  public readonly menuItemType: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    menuItemType: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.menuItemType = menuItemType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
