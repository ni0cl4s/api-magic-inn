import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LoginCredentialsModel } from '../../domain/models/auth/login-credentials.model';
import { AuthTokenModel } from '../../domain/models/auth/auth-token.model';
import { IBcryptService } from '../../domain/interfaces/adapters/bcrypt-service.interface';
import { IAccountRepository } from '../../domain/interfaces/repositories/account/account.repository.interface';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { UserAccountModel } from '../../domain/models/userAccount';
import {
  IJwtPayload,
  IJwtService,
} from '../../domain/interfaces/adapters/jwt-service.interface';
import { UserProfileModel } from '../../domain/models/userProfile';
import { IProfileRepository } from '../../domain/interfaces/repositories/profile/profile.repository.interface';

@Injectable()
export class LoginUseCases {
  constructor(
    @Inject('IBcryptService')
    private readonly bcryptService: IBcryptService,
    @Inject('IJwtService')
    private readonly jwtService: IJwtService,
    @Inject('IAccountRepository')
    private readonly accountRepository: IAccountRepository,
    @Inject('IProfileRepository')
    private readonly profileRepository: IProfileRepository,
    private readonly loggerService: LoggerService,
  ) {}

  async login(
    loginCredentials: LoginCredentialsModel,
  ): Promise<AuthTokenModel> {
    const userAccount: UserAccountModel =
      await this.accountRepository.getAccountByEmail(loginCredentials.email);
    if (!userAccount) {
      this.loggerService.log('LoginUseCases', 'Invalid credentials');
      throw new NotFoundException('Invalid credentials');
    }
    const isValidPassword: boolean = await this.bcryptService.comparePassword(
      loginCredentials.password,
      userAccount.hashedPassword,
    );
    if (isValidPassword == false) {
      this.loggerService.log('LoginUseCases', 'Invalid credentials');
      throw new NotFoundException('Invalid credentials');
    }
    const userProfile: UserProfileModel =
      await this.profileRepository.getProfileByAccountId(userAccount.id);

    const jwtPayload: IJwtPayload = {
      accountId: userAccount.id,
      accountEmail: userAccount.email,
      accountRole: userAccount.role,
      userProfileId: userProfile.id,
    };

    const accessToken: string = this.jwtService.generateToken(
      jwtPayload,
      process.env.JWT_SECRET,
    );
    if (!jwtPayload || !accessToken) {
      throw new Error('Failed to login');
    } else {
      this.loggerService.log('LoginUseCases', 'Login successfully');
    }
    return {
      accessToken: accessToken,
    };
  }
}
