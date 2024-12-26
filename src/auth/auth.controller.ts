import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags("AUTH")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation(
    {
      summary: "Yangi foydalanuvchini ro'yxatan o'tkazish"
    }
  )
  @ApiResponse(
    {
      status:201,
      description:"Ro'yxatan o'tgan Foydalanuvchi",
      type: String,
    }
  )
  @Post("signup")
  async signUp(@Body() createUserDto:CreateUserDto){
    return this.authService.signUp(createUserDto)
  }
  
  @ApiOperation(
    {
      summary: "Tizimga kirish"
    }
  )
  @Post("signin")
  async signIn(@Body() signInDto:SignInDto){
    return this.authService.signIn(signInDto)
  }
}
