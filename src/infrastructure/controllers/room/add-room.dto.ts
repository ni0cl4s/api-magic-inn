import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { RoomType } from '@prisma/client';

export class AddRoomDto {
  @ApiProperty({ required: true, description: 'Room name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true, description: 'Room capacity' })
  @IsNotEmpty()
  @IsString()
  capacity: number;

  @ApiProperty({ required: true, description: 'Room type', enum: RoomType })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ required: true, description: 'Room price' })
  @IsNotEmpty()
  @IsString()
  price: number;
}
