import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import usersConstants from '../users/users.constants';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const role = await this.authService.findUserRoleById(request.user.id);

    return role === usersConstants.ADMIN;
  }
}
