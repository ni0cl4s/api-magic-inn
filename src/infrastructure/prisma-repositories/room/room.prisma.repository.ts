import { Injectable } from '@nestjs/common';
import { IRoomRepository } from '../../../domain/interfaces/repositories/room/room.repository.interface';
import { AddRoomDto } from '../../controllers/room/add-room.dto';
import { RoomModel } from '../../../domain/models/room';
import { UpdateRoomDto } from '../../controllers/room/update-room.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { RoomType } from '@prisma/client';

@Injectable()
export class RoomPrismaRepository implements IRoomRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async addRoom(addRoomDto: AddRoomDto): Promise<RoomModel> {
    let roomType: RoomType;
    try {
      if (addRoomDto.type === 'NORMAL') {
        roomType = RoomType.NORMAL;
      } else if (addRoomDto.type === 'VIP') {
        roomType = RoomType.VIP;
      } else if (addRoomDto.type === 'LUXURY') {
        roomType = RoomType.LUXURY;
      } else if (addRoomDto.type === 'LOWCOST') {
        roomType = RoomType.LOWCOST;
      } else if (addRoomDto.type === 'MAGIC') {
        roomType = RoomType.MAGIC;
      }
      return await this.prismaService.room.create({
        data: {
          name: addRoomDto.name,
          capacity: addRoomDto.capacity,
          price: addRoomDto.price,
          type: roomType,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteRoom(id: string): Promise<string> {
    try {
      await this.prismaService.room.delete({
        where: {
          id: id,
        },
      });
      return `Room : ${id} deleted successfully`;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error(`Room : ${id} not found`);
      }
      throw new Error(error);
    }
  }

  async getAllRoom(): Promise<RoomModel[]> {
    try {
      return await this.prismaService.room.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getRoomById(id: string): Promise<RoomModel> {
    try {
      return await this.prismaService.room.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error(`Room : ${id} not found`);
      }
      throw new Error(error);
    }
  }

  async updateRoom(
    id: string,
    updateRoomDto: UpdateRoomDto,
  ): Promise<RoomModel> {
    let roomType: RoomType;
    try {
      if (updateRoomDto.type === 'NORMAL') {
        roomType = RoomType.NORMAL;
      } else if (updateRoomDto.type === 'VIP') {
        roomType = RoomType.VIP;
      } else if (updateRoomDto.type === 'LUXURY') {
        roomType = RoomType.LUXURY;
      } else if (updateRoomDto.type === 'LOWCOST') {
        roomType = RoomType.LOWCOST;
      } else if (updateRoomDto.type === 'MAGIC') {
        roomType = RoomType.MAGIC;
      }
      return await this.prismaService.room.update({
        where: {
          id: id,
        },
        data: {
          name: updateRoomDto.name,
          capacity: updateRoomDto.capacity,
          price: updateRoomDto.price,
          type: roomType,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
