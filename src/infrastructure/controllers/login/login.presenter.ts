import { ApiProperty } from '@nestjs/swagger';

export class LoginPresenter {
  @ApiProperty({ description: 'access token' })
  accessToken: string;
}
