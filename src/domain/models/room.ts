export class RoomModel {
  public readonly id: string;
  public readonly name: string;
  public readonly type: string;
  public readonly capacity: number;
  public readonly price: number;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    id: string,
    name: string,
    type: string,
    capacity: number,
    price: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.capacity = capacity;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
