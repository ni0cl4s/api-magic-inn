import { ConflictException, Injectable } from '@nestjs/common';
import { IAccountRepository } from '../../../domain/interfaces/repositories/account/account.repository.interface';
import { UserAccountModel } from '../../../domain/models/userAccount';
import { PrismaService } from '../../prisma/prisma.service';
import { LoggerService } from '../../logger/logger.service';

@Injectable()
export class AccountPrismaRepository implements IAccountRepository {
  constructor(
    private prismaService: PrismaService,
    private loggerService: LoggerService,
  ) {}

  async getAccountByEmail(email: string): Promise<UserAccountModel> {
    try {
      return await this.prismaService.userAccount.findUniqueOrThrow({
        where: {
          email,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        this.loggerService.error('Account not found', error.message);
        throw new Error('Account not found');
      } else {
        throw new Error(error);
      }
    }
  }

  async createAccount(
    email: string,
    hashedPassword: string,
  ): Promise<UserAccountModel> {
    try {
      return await this.prismaService.userAccount.create({
        data: {
          email,
          hashedPassword,
        },
      });
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        this.loggerService.error('Create account error', error.message);
        throw new ConflictException('Email already in use');
      } else {
        throw new Error(error);
      }
    }
  }
}
