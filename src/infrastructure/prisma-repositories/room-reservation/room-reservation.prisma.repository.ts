import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IRoomReservationRepository } from '../../../domain/interfaces/repositories/room-reservation/room-reservation.repository.interface';
import { AddRoomReservationDto } from '../../controllers/room-reservation/add-room-reservation.dto';
import { RoomReservationModel } from '../../../domain/models/roomReservation';
import { UpdateRoomReservationDto } from '../../controllers/room-reservation/update-room-reservation.dto';

@Injectable()
export class RoomReservationPrismaRepository
  implements IRoomReservationRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  async addRoomReservation(
    addRoomReservationDto: AddRoomReservationDto,
  ): Promise<RoomReservationModel> {
    try {
      return await this.prismaService.roomReservation.create({
        data: {
          startDate: addRoomReservationDto.startDate,
          endDate: addRoomReservationDto.endDate,
          userProfileId: addRoomReservationDto.profileId,
          roomId: addRoomReservationDto.roomId,
        },
      });
    } catch (error) {
      throw new Error('Failed to add room reservation');
    }
  }

  async deleteRoomReservation(id: string): Promise<string> {
    try {
      await this.prismaService.roomReservation.delete({
        where: {
          id,
        },
      });
      return id;
    } catch (error) {
      throw new Error(`Failed to delete room reservation with id : ${id}`);
    }
  }

  async getAllRoomReservation(): Promise<RoomReservationModel[]> {
    try {
      return await this.prismaService.roomReservation.findMany();
    } catch (error) {
      throw new Error('Failed to get all room reservations');
    }
  }

  async getRoomReservationById(id: string): Promise<RoomReservationModel> {
    try {
      return await this.prismaService.roomReservation.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(`Failed to get room reservation with id : ${id}`);
    }
  }

  async updateRoomReservation(
    id: string,
    updateRoomReservationDto: UpdateRoomReservationDto,
  ): Promise<RoomReservationModel> {
    try {
      return await this.prismaService.roomReservation.update({
        where: {
          id,
        },
        data: {
          startDate: updateRoomReservationDto.startDate,
          endDate: updateRoomReservationDto.endDate,
          userProfileId: updateRoomReservationDto.profileId,
          roomId: updateRoomReservationDto.roomId,
        },
      });
    } catch (error) {
      throw new Error(`Failed to update room reservation with id : ${id}`);
    }
  }
}
