import { ApiProperty } from '@nestjs/swagger';
import { CharacterClass, CharacterRace } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @ApiProperty({ required: true, description: 'User email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, description: 'User password' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ required: true, description: 'Character name' })
  @IsNotEmpty()
  @IsString()
  characterName: string;

  @ApiProperty({
    required: true,
    description: 'Character class',
    enum: CharacterClass,
    default: 'WARRIOR',
  })
  @IsNotEmpty()
  @IsString()
  characterClass: string;

  @ApiProperty({
    required: true,
    description: 'Character race',
    enum: CharacterRace,
    default: 'HUMAN',
  })
  @IsNotEmpty()
  @IsString()
  characterRace: string;
}
