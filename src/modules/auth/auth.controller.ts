import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import {
  Controller,
  UseGuards,
  Request,
  Post,
  Get,
  Body,
  Logger,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
