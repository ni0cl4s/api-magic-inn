import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { RoleGuard } from '../../common/guards/role.guard';
import { LoggerService } from '../../logger/logger.service';
import { HasRoles } from '../../common/decorators/role.decorator';
import { Role } from '@prisma/client';
import { RoomModel } from '../../../domain/models/room';
import { AddRoomDto } from './add-room.dto';
import { UpdateRoomDto } from './update-room.dto';
import { RoomUseCases } from '../../../use-cases/room/room.use-cases';

@Controller()
@ApiBearerAuth()
@ApiTags('Room')
@UseGuards(JwtGuard, RoleGuard)
export class RoomController {
  constructor(
    private readonly roomUseCases: RoomUseCases,
    private readonly loggerService: LoggerService,
  ) {}

  @Post('room')
  @HasRoles(Role.ADMIN)
  async addRoom(@Body() addRoomDto: AddRoomDto): Promise<RoomModel> {
    this.loggerService.log('RoomController', `Attempting add room`);
    return await this.roomUseCases.addRoom(addRoomDto);
  }

  @Get('rooms')
  async getAllRoom(): Promise<RoomModel[]> {
    this.loggerService.log('RoomController', `Attempting get all rooms`);
    return await this.roomUseCases.getAllRoom();
  }

  @Get('room/:id')
  async getRoomById(@Param('id') id: string): Promise<RoomModel> {
    this.loggerService.log(
      'RoomController',
      `Attempting get room by id : ${id}`,
    );
    return await this.roomUseCases.getRoomById(id);
  }

  @Put('room/:id')
  @HasRoles(Role.ADMIN)
  async updateRoom(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<RoomModel> {
    this.loggerService.log(
      'RoomController',
      `Attempting update room by id : ${id}`,
    );
    return await this.roomUseCases.updateRoom(id, updateRoomDto);
  }

  @Delete('room/:id')
  @HasRoles(Role.ADMIN)
  async deleteRoom(@Param('id') id: string): Promise<string> {
    this.loggerService.log(
      'RoomController',
      `Attempting delete room by id : ${id}`,
    );
    return await this.roomUseCases.deleteRoom(id);
  }
}
