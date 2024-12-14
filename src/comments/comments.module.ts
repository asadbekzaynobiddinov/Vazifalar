import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './entities/comment.entity';
import { AuthGuard } from 'src/middlewares';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    JwtModule.register({
      secret: 'MySupperSecretKey',
    }),
  ],
  controllers: [CommentsController],
  providers: [CommentsService, AuthGuard],
})
export class CommentsModule {}
