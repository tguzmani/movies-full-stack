import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async findUserByEmail(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      user.password = undefined;
      return user;
    }

    return null;
  }

  async findUserRoleById(id: number): Promise<any> {
    const user = await this.usersService.findById(id);

    if (user && user.role) return user.role;

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
