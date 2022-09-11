import { HttpException, HttpStatus } from '@nestjs/common';

export class PasswordsDontMatchException extends HttpException {
  constructor() {
    super("Passwords don't match", HttpStatus.BAD_REQUEST);
  }
}

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super('There is already a user with that email', HttpStatus.BAD_REQUEST);
  }
}
