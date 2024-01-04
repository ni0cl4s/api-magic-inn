export class RoomReservationModel {
  public readonly id: string;
  public readonly roomId: string;
  public readonly userProfileId: string;
  public readonly startDate: Date;
  public readonly endDate: Date;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    id: string,
    roomId: string,
    userProfileId: string,
    startDate: Date,
    endDate: Date,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.roomId = roomId;
    this.userProfileId = userProfileId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
