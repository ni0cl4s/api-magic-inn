import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginPresenter } from './login.presenter';
import { LoggerService } from '../../logger/logger.service';
import { AuthTokenModel } from '../../../domain/models/auth/auth-token.model';
import { LoginUseCases } from '../../../use-cases/auth/login.use-cases';

@Controller('login')
@ApiTags('Login')
@ApiExtraModels(LoginPresenter)
@ApiResponse({
  status: 200,
  description: 'Get access token after login successfully',
  type: LoginPresenter,
})
export class LoginController {
  constructor(
    private readonly loginUseCases: LoginUseCases,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  async login(@Body() loginDto: LoginDto): Promise<AuthTokenModel> {
    this.loggerService.log(
      'LoginController',
      `Attempting login for user with email: ${loginDto.email}`,
    );
    return await this.loginUseCases.login(loginDto);
  }
}
