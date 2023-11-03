import { Body, Controller, Post } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignupPresenter } from './signup.presenter';
import { LoggerService } from '../../logger/logger.service';
import { AuthTokenModel } from '../../../domain/models/auth/auth-token.model';
import { SignupDto } from './signup.dto';
import { SignupUseCases } from '../../../use-cases/auth/signup.use-cases';

@Controller('signup')
@ApiTags('Signup')
@ApiExtraModels(SignupPresenter)
@ApiResponse({
  status: 200,
  description: 'Signup successfully',
  type: SignupPresenter,
})
export class SignupController {
  constructor(
    private readonly signupUseCases: SignupUseCases,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  async signup(@Body() signupDto: SignupDto): Promise<AuthTokenModel> {
    this.loggerService.log('SignupController', `Attempting signup`);
    return await this.signupUseCases.signup(signupDto);
  }
}
