import { IsEmail, IsPositive } from 'class-validator';

export class VerifyDto {
  @IsEmail()
  email: string;

  @IsPositive()
  otp: number;
}
