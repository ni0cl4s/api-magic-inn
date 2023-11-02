import { Injectable } from '@nestjs/common';
import {
  IJwtPayload,
  IJwtService,
} from '../../../domain/interfaces/adapters/jwt-service.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService implements IJwtService {
  constructor(private readonly jwtService: JwtService) {}

  async checkToken(token: string): Promise<object> {
    return await this.jwtService.verifyAsync(token);
  }

  generateToken(payload: IJwtPayload, secret: string): string {
    return this.jwtService.sign(payload, {
      secret: secret,
      expiresIn: '60m',
    });
  }

  async decodeToken(token: string): Promise<any> {
    return this.jwtService.decode(token);
  }
}
