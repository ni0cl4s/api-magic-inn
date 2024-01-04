import { Inject, Injectable } from '@nestjs/common';
import { AddRoomReservationDto } from '../../infrastructure/controllers/room-reservation/add-room-reservation.dto';
import { UpdateRoomReservationDto } from '../../infrastructure/controllers/room-reservation/update-room-reservation.dto';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { IRoomReservationRepository } from '../../domain/interfaces/repositories/room-reservation/room-reservation.repository.interface';
import { RoomReservationModel } from '../../domain/models/roomReservation';

@Injectable()
export class RoomReservationUseCases {
  constructor(
    @Inject('IRoomReservationRepository')
    private readonly roomReservationRepository: IRoomReservationRepository,
    private readonly loggerService: LoggerService,
  ) {}

  async addRoomReservation(
    addRoomReservationDto: AddRoomReservationDto,
  ): Promise<RoomReservationModel> {
    const addedRoomReservation: RoomReservationModel =
      await this.roomReservationRepository.addRoomReservation(
        addRoomReservationDto,
      );
    if (!addedRoomReservation) {
      throw new Error('Failed to add room reservation');
    } else {
      this.loggerService.log(
        'RoomReservationUseCases',
        `Room reservation added successfully`,
      );
      return addedRoomReservation;
    }
  }

  async getAllRoomReservation(): Promise<RoomReservationModel[]> {
    const roomReservations: RoomReservationModel[] =
      await this.roomReservationRepository.getAllRoomReservation();
    if (!roomReservations) {
      throw new Error('Failed to get all room reservations');
    } else {
      this.loggerService.log(
        'RoomReservationUseCases',
        `Get all room reservations successfully`,
      );
      return roomReservations;
    }
  }

  async getRoomReservationById(id: string): Promise<RoomReservationModel> {
    const roomxReservation: RoomReservationModel =
      await this.roomReservationRepository.getRoomReservationById(id);
    if (!roomxReservation) {
      throw new Error(`Failed to get room reservation with id : ${id}`);
    } else {
      this.loggerService.log(
        'RoomReservationUseCases',
        `Get room reservation with id : ${id} successfully`,
      );
      return roomxReservation;
    }
  }

  async updateRoomReservation(
    id: string,
    updateRoomReservationDto: UpdateRoomReservationDto,
  ): Promise<RoomReservationModel> {
    const updatedRoomReservation: RoomReservationModel =
      await this.roomReservationRepository.updateRoomReservation(
        id,
        updateRoomReservationDto,
      );
    if (!updatedRoomReservation) {
      throw new Error(`Failed to update room reservation with id : ${id}`);
    } else {
      this.loggerService.log(
        'RoomReservationUseCases',
        `Update room reservation with id : ${id} successfully`,
      );
      return updatedRoomReservation;
    }
  }

  async deleteRoomReservation(id: string): Promise<string> {
    const deletedRoomReservation: string =
      await this.roomReservationRepository.deleteRoomReservation(id);
    if (!deletedRoomReservation) {
      throw new Error(`Failed to delete room reservation with id : ${id}`);
    } else {
      this.loggerService.log(
        'RoomReservationUseCases',
        `Delete room reservation with id : ${id} successfully`,
      );
      return deletedRoomReservation;
    }
  }
}
