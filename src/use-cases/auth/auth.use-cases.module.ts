import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { LoginUseCases } from './login.use-cases';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { AccountPrismaRepository } from '../../infrastructure/prisma-repositories/account/account.prisma.repository';
import { JwtTokenService } from '../../infrastructure/services/jwt/jwt.service';
import { JwtService } from '@nestjs/jwt';
import { ProfilePrismaRepository } from '../../infrastructure/prisma-repositories/profile/profile.prisma.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: 'IBcryptService',
      useClass: BcryptService,
    },
    {
      provide: 'IAccountRepository',
      useClass: AccountPrismaRepository,
    },
    {
      provide: 'IProfileRepository',
      useClass: ProfilePrismaRepository,
    },
    {
      provide: 'IJwtService',
      useClass: JwtTokenService,
    },
    LoginUseCases,
    LoggerService,
    JwtService,
  ],
  exports: [LoginUseCases],
})
export class AuthUseCasesModule {}
