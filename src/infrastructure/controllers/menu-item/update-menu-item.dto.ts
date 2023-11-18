import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MenuItemType } from '@prisma/client';

export class UpdateMenuItemDto {
  @ApiProperty({ required: false, description: 'Menu Item name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false, description: 'Menu Item description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ required: false, description: 'Menu Item price' })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    required: false,
    description: 'Menu Item Type',
    enum: MenuItemType,
  })
  @IsNotEmpty()
  @IsString()
  menuItemType: string;
}
