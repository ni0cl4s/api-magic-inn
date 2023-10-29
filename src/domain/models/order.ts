export class OrderModel {
  private readonly id: string;
  private readonly createdAt: Date;
  private readonly menuItemQuantity: number;
  private readonly menuItemId: string;
  private readonly userProfileId: string;

  constructor(
    id: string,
    createdAt: Date,
    menuItemQuantity: number,
    menuItemId: string,
    userProfileId: string,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.menuItemQuantity = menuItemQuantity;
    this.menuItemId = menuItemId;
    this.userProfileId = userProfileId;
  }
}
