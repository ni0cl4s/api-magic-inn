import { AddRoomReservationDto } from '../../../../infrastructure/controllers/room-reservation/add-room-reservation.dto';
import { RoomReservationModel } from '../../../models/roomReservation';
import { UpdateRoomReservationDto } from '../../../../infrastructure/controllers/room-reservation/update-room-reservation.dto';

export interface IRoomReservationRepository {
  addRoomReservation(
    addRoomReservationDto: AddRoomReservationDto,
  ): Promise<RoomReservationModel>;

  getAllRoomReservation(): Promise<RoomReservationModel[]>;

  getRoomReservationById(id: string): Promise<RoomReservationModel>;

  updateRoomReservation(
    id: string,
    updateRoomReservationDto: UpdateRoomReservationDto,
  ): Promise<RoomReservationModel>;

  deleteRoomReservation(id: string): Promise<string>;
}
