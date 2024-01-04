import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRoomReservationDto {
  @ApiProperty({ required: true, description: 'Room id' })
  @IsNotEmpty()
  @IsString()
  roomId: string;

  @ApiProperty({ required: true, description: 'Profile id' })
  @IsNotEmpty()
  @IsString()
  profileId: string;

  @ApiProperty({ required: true, description: 'Start date' })
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({ required: true, description: 'End date' })
  @IsNotEmpty()
  endDate: Date;
}
