import { Injectable } from '@nestjs/common';
import { IAccountRepository } from '../../../domain/interfaces/repositories/account/account.repository.interface';
import { UserAccountModel } from '../../../domain/models/userAccount';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AccountPrismaRepository implements IAccountRepository {
  constructor(private prismaService: PrismaService) {}

  async getAccountByEmail(email: string): Promise<UserAccountModel> {
    try {
      return await this.prismaService.userAccount.findUniqueOrThrow({
        where: {
          email,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('Account not found');
      } else {
        throw new Error(error);
      }
    }
  }
}
