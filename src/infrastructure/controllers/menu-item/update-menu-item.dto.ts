import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { MenuItemType } from '@prisma/client';

export class UpdateMenuItemDto {
  @ApiProperty({ required: false, description: 'Menu Item name' })
  @IsString()
  name: string;

  @ApiProperty({ required: false, description: 'Menu Item description' })
  @IsString()
  description: string;

  @ApiProperty({ required: false, description: 'Menu Item price' })
  @IsNumber()
  price: number;

  @ApiProperty({
    required: false,
    description: 'Menu Item Type',
    enum: MenuItemType,
  })
  @IsString()
  menuItemType: string;
}
