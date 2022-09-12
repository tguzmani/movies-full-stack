import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from './../users/users.service';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Controller, UseGuards, Post, Get, Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    return await this.usersService.findById(req.user.id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
