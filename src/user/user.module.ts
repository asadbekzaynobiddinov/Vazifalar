import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
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
  controllers: [UserController],
  providers: [UserService, LogtailLoggerService],
})
export class UserModule {}
