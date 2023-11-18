import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoomType } from '@prisma/client';

export class UpdateRoomDto {
  @ApiProperty({ required: false, description: 'Room name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false, description: 'Room capacity' })
  @IsNotEmpty()
  @IsString()
  capacity: number;

  @ApiProperty({ required: false, description: 'Room type', enum: RoomType })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ required: false, description: 'Room price' })
  @IsNotEmpty()
  @IsString()
  price: number;
}
