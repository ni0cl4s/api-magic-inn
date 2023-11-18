import { AddRoomDto } from '../../../../infrastructure/controllers/room/add-room.dto';
import { RoomModel } from '../../../models/room';
import { UpdateRoomDto } from '../../../../infrastructure/controllers/room/update-room.dto';

export interface IRoomRepository {
  addRoom(addRoomDto: AddRoomDto): Promise<RoomModel>;

  getAllRoom(): Promise<RoomModel[]>;

  getRoomById(id: string): Promise<RoomModel>;

  updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<RoomModel>;

  deleteRoom(id: string): Promise<string>;
}
