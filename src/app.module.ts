import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { OtpModule } from './otp/otp.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    UsersModule,
    PostsModule,
    CommentsModule,
    MongooseModule.forRoot(process.env.MONGODB),
    AuthModule,
    OtpModule,
  ],
})
export class AppModule {}
