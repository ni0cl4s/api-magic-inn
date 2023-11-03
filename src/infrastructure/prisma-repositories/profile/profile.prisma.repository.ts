import { ConflictException, Injectable } from '@nestjs/common';
import { IProfileRepository } from '../../../domain/interfaces/repositories/profile/profile.repository.interface';
import { UserProfileModel } from '../../../domain/models/userProfile';
import { PrismaService } from '../../prisma/prisma.service';
import { LoggerService } from '../../logger/logger.service';

@Injectable()
export class ProfilePrismaRepository implements IProfileRepository {
  constructor(
    private prismaService: PrismaService,
    private loggerService: LoggerService,
  ) {}

  async getProfileByAccountId(accountId: string): Promise<UserProfileModel> {
    try {
      return await this.prismaService.userProfile.findUniqueOrThrow({
        where: {
          userAccountId: accountId,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        this.loggerService.error('Profile not found', error.message);
        throw new Error('Profile not found');
      } else {
        throw new Error(error);
      }
    }
  }

  async createProfile(
    characterName: string,
    characterClass,
    characterRace,
    userAccountId: string,
  ): Promise<UserProfileModel> {
    try {
      return await this.prismaService.userProfile.create({
        data: {
          characterName,
          characterClass,
          characterRace,
          userAccountId,
        },
      });
    } catch (error) {
      if (
        error.code === 'P2002' &&
        error.meta.target.includes('characterName')
      ) {
        this.loggerService.error('Create profile error', error.message);
        throw new ConflictException('Character name already in use');
      } else {
        throw new Error(error);
      }
    }
  }
}
