import * as process from 'process';
import { JwtModule as Jwt } from '@nestjs/jwt/dist';
import { Module } from '@nestjs/common';
import { JwtTokenService } from './jwt.service';

@Module({
  imports: [
    Jwt.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [JwtTokenService],
  exports: [JwtTokenService],
})
export class JwtServiceModule {}
