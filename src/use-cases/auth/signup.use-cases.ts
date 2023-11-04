import { Inject, Injectable } from '@nestjs/common';
import { SignupCredentialsModel } from '../../domain/models/auth/signup-credentials.model';
import { AuthTokenModel } from '../../domain/models/auth/auth-token.model';
import { IBcryptService } from '../../domain/interfaces/adapters/bcrypt-service.interface';
import { IAccountRepository } from '../../domain/interfaces/repositories/account/account.repository.interface';
import { UserAccountModel } from '../../domain/models/userAccount';
import { IProfileRepository } from '../../domain/interfaces/repositories/profile/profile.repository.interface';
import { UserProfileModel } from '../../domain/models/userProfile';
import {
  IJwtPayload,
  IJwtService,
} from '../../domain/interfaces/adapters/jwt-service.interface';

@Injectable()
export class SignupUseCases {
  constructor(
    @Inject('IBcryptService') private readonly bcryptService: IBcryptService,
    @Inject('IAccountRepository')
    private readonly accountRepository: IAccountRepository,
    @Inject('IProfileRepository')
    private readonly profileRepository: IProfileRepository,
    @Inject('IJwtService')
    private readonly jwtService: IJwtService,
  ) {}

  async signup(
    signupCredentials: SignupCredentialsModel,
  ): Promise<AuthTokenModel> {
    const hashedPassword: string = await this.bcryptService.hashPassword(
      signupCredentials.password,
    );
    const createdUserAccount: UserAccountModel =
      await this.accountRepository.createAccount(
        signupCredentials.email,
        hashedPassword,
      );
    const createdUserProfile: UserProfileModel =
      await this.profileRepository.createProfile(
        signupCredentials.characterName,
        signupCredentials.characterClass,
        signupCredentials.characterRace,
        createdUserAccount.id,
      );

    const jwtPayload: IJwtPayload = {
      accountId: createdUserAccount.id,
      accountEmail: createdUserAccount.email,
      accountRole: createdUserAccount.role,
      userProfileId: createdUserProfile.id,
    };
    const accessToken: string = this.jwtService.generateToken(
      jwtPayload,
      process.env.JWT_SECRET,
    );
    return {
      accessToken: accessToken,
    };
  }
}
