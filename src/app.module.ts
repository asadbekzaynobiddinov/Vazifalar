import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('Mongodb Url'),
    AuthModule,
    OtpModule,
  ],
})
export class AppModule {}
