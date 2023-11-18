import { Inject, Injectable } from '@nestjs/common';
import { AddRoomDto } from '../../infrastructure/controllers/room/add-room.dto';
import { UpdateRoomDto } from '../../infrastructure/controllers/room/update-room.dto';
import { IRoomRepository } from '../../domain/interfaces/repositories/room/room.repository.interface';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { RoomModel } from '../../domain/models/room';

@Injectable()
export class RoomUseCases {
  constructor(
    @Inject('IRoomRepository') private readonly roomRepository: IRoomRepository,
    private readonly loggerService: LoggerService,
  ) {}

  async addRoom(addRoomDto: AddRoomDto) {
    const addedRoom: RoomModel = await this.roomRepository.addRoom(addRoomDto);
    if (!addedRoom) {
      throw new Error('Failed to add room');
    } else {
      this.loggerService.log('RoomUseCases', `Room added successfully`);
      return addedRoom;
    }
  }

  async getAllRoom() {
    const rooms: RoomModel[] = await this.roomRepository.getAllRoom();
    if (!rooms) {
      throw new Error('Failed to get all rooms');
    } else {
      this.loggerService.log('RoomUseCases', `Get all rooms successfully`);
      return rooms;
    }
  }

  async getRoomById(id: string) {
    const room: RoomModel = await this.roomRepository.getRoomById(id);
    if (!room) {
      throw new Error(`Failed to get room with id : ${id}`);
    } else {
      this.loggerService.log(
        'RoomUseCases',
        `Get room with id : ${id} successfully`,
      );
      return room;
    }
  }

  async updateRoom(id: string, updateRoomDto: UpdateRoomDto) {
    const updatedRoom: RoomModel = await this.roomRepository.updateRoom(
      id,
      updateRoomDto,
    );
    if (!updatedRoom) {
      throw new Error(`Failed to update room with id : ${id}`);
    } else {
      this.loggerService.log(
        'RoomUseCases',
        `Update room with id : ${id} successfully`,
      );
      return updatedRoom;
    }
  }

  async deleteRoom(id: string) {
    const deletedString: string = await this.roomRepository.deleteRoom(id);
    if (!deletedString) {
      throw new Error(`Failed to delete room with id : ${id}`);
    } else {
      this.loggerService.log(
        'RoomUseCases',
        `Delete room with id : ${id} successfully`,
      );
      return deletedString;
    }
  }
}
