import { ApiProperty } from '@nestjs/swagger';

export class SignupPresenter {
  @ApiProperty({ description: 'access token' })
  accessToken: string;
}
