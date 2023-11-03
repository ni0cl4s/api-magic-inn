import { Injectable } from '@nestjs/common';
import { IProfileRepository } from '../../../domain/interfaces/repositories/profile/profile.repository.interface';
import { UserProfileModel } from '../../../domain/models/userProfile';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProfilePrismaRepository implements IProfileRepository {
  constructor(private prismaService: PrismaService) {}

  async getProfileByAccountId(accountId: string): Promise<UserProfileModel> {
    try {
      return await this.prismaService.userProfile.findUniqueOrThrow({
        where: {
          userAccountId: accountId,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('Profile not found');
      } else {
        throw new Error(error);
      }
    }
  }
}
