import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LoggerModule } from 'src/logger/logger.module';
import { LogtailLoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'MySecretKey',
    }),
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LogtailLoggerService],
})
export class AuthModule {}
