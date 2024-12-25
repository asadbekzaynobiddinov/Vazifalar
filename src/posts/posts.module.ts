import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './entities/post.entity';
import { AuthGuard } from 'src/middlewares';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    JwtModule.register({
      secret: 'MySupperSecretKey',
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService, AuthGuard],
})
export class PostsModule {}
