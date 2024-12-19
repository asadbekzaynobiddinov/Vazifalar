import {
  Controller,
  Post,
  Body,
  HttpCode,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from './auth.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { OtpDto } from './dto/otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() user: CreateUserDto) {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Post('verify')
  @HttpCode(200)
  verify(@Body() user: OtpDto) {
    return this.authService.verify(user.user_email, user.otp_code);
  }

  @Post('refresh')
  @HttpCode(200)
  refresh(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshAccess(refreshToken);
  }

  @Post('forget')
  @HttpCode(200)
  generateRefreshUrl(@Body('email') email: string) {
    return this.authService.generateRefreshUrl(email);
  }

  @Post('reset-password/:token')
  resetPassword(
    @Param('token') token: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.authService.resetPassword(token, newPassword);
  }

  @Post('single')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const filename = `${Date.now()}${extname(file.originalname)}`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
    return { message: 'Fayl muvaffaqiyatli yuklandi', file };
  }
}
