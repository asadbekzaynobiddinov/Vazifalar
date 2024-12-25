import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    CommentsModule,
    MongooseModule.forRoot(
      'mongodb+srv://asadbekzaynobiddinov51:XwOPipdBD5YIIRt2@cluster0.32twq.mongodb.net/',
    ),
    AuthModule,
    OtpModule,
  ],
})
export class AppModule {}
