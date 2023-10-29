import { RoomReservationModel } from './roomReservation';

export class RoomModel {
  private readonly id: string;
  private readonly name: string;
  private readonly type: string;
  private readonly capacity: number;
  private readonly price: number;
  private readonly roomReservations: RoomReservationModel[];
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  constructor(
    id: string,
    name: string,
    type: string,
    capacity: number,
    price: number,
    roomReservations: RoomReservationModel[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.capacity = capacity;
    this.price = price;
    this.roomReservations = roomReservations;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
