import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: number;
}
