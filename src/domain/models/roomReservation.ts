export class RoomReservationModel {
  private readonly id: string;
  private readonly roomId: string;
  private readonly userProfileId: string;
  private readonly startDate: Date;
  private readonly endDate: Date;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

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
