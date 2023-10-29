import { RoomReservationModel } from './roomReservation';
import { OrderModel } from './order';

export class UserProfileModel {
  private readonly id: string;
  private readonly characterName: string;
  private readonly characterRace: string;
  private readonly characterClass: string;
  private readonly userAccountId: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private readonly roomReservations: RoomReservationModel[];
  private readonly orders: OrderModel[];

  constructor(
    id: string,
    characterName: string,
    characterRace: string,
    characterClass: string,
    userAccountId: string,
    createdAt: Date,
    updatedAt: Date,
    roomReservations: RoomReservationModel[],
    orders: OrderModel[],
  ) {
    this.id = id;
    this.characterName = characterName;
    this.characterRace = characterRace;
    this.characterClass = characterClass;
    this.userAccountId = userAccountId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.roomReservations = roomReservations;
    this.orders = orders;
  }
}
