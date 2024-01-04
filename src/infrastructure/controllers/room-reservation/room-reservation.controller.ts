import { HasRoles } from '../../common/decorators/role.decorator';
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
import { Role } from '@prisma/client';
import { RoomReservationModel } from '../../../domain/models/roomReservation';
import { AddRoomReservationDto } from './add-room-reservation.dto';
import { UpdateRoomReservationDto } from './update-room-reservation.dto';
import { RoomReservationUseCases } from '../../../use-cases/room-reservation/room-reservation.use-cases';
import { LoggerService } from '../../logger/logger.service';

@Controller()
@ApiBearerAuth()
@ApiTags('Room Reservation')
@UseGuards(JwtGuard, RoleGuard)
@HasRoles(Role.ADMIN, Role.USER)
export class RoomReservationController {
  constructor(
    private readonly roomReservationUseCases: RoomReservationUseCases,
    private readonly loggerService: LoggerService,
  ) {}

  @Post('room-reservation')
  async addRoomReservation(
    @Body() addRoomReservationDto: AddRoomReservationDto,
  ): Promise<RoomReservationModel> {
    this.loggerService.log(
      'RoomReservationController',
      `Attempting add room reservation`,
    );
    return await this.roomReservationUseCases.addRoomReservation(
      addRoomReservationDto,
    );
  }

  @Get('room-reservations')
  async getAllRoomReservation(): Promise<RoomReservationModel[]> {
    this.loggerService.log(
      'RoomReservationController',
      `Attempting get all room reservations`,
    );
    return await this.roomReservationUseCases.getAllRoomReservation();
  }

  @Get('room-reservation/:id')
  async getRoomReservationById(
    @Param('id') id: string,
  ): Promise<RoomReservationModel> {
    this.loggerService.log(
      'RoomReservationController',
      `Attempting get room reservation by id : ${id}`,
    );
    return await this.roomReservationUseCases.getRoomReservationById(id);
  }

  @Put('room-reservation/:id')
  async updateRoomReservation(
    @Param('id') id: string,
    @Body() updateRoomReservationDto: UpdateRoomReservationDto,
  ): Promise<RoomReservationModel> {
    this.loggerService.log(
      'RoomReservationController',
      `Attempting update room reservation by id : ${id}`,
    );
    return await this.roomReservationUseCases.updateRoomReservation(
      id,
      updateRoomReservationDto,
    );
  }

  @Delete('room-reservation/:id')
  async deleteRoomReservation(@Param('id') id: string): Promise<string> {
    this.loggerService.log(
      'RoomReservationController',
      `Attempting delete room reservation by id : ${id}`,
    );
    return await this.roomReservationUseCases.deleteRoomReservation(id);
  }
}
