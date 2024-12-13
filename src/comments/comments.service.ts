import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './entities/comment.entity';
import { Model } from 'mongoose';
import { IResponseMessage } from 'src/utils/response.message';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}
  async create(createCommentDto: CreateCommentDto): Promise<IResponseMessage> {
    const newComment = new this.commentModel(createCommentDto);
    await newComment.save();
    if (!newComment || newComment == null) {
      return {
        success: false,
        status: 500,
        message: 'Internal server Error',
      };
    }
    return {
      success: true,
      status: 201,
      message: newComment,
    };
  }

  async findAll(page: number, limit: number): Promise<IResponseMessage> {
    const skip = (page - 1) * limit;
    const comments = await this.commentModel.find().skip(skip).limit(limit);
    if (comments.length === 0) {
      return {
        success: false,
        status: 404,
        message: 'Comments not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: comments,
    };
  }

  async findOne(id: string): Promise<IResponseMessage> {
    const comment = await this.commentModel.findById(id);
    if (!comment || comment == null) {
      return {
        success: false,
        status: 404,
        message: 'Comment not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: comment,
    };
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<IResponseMessage> {
    const updatedComment = await this.commentModel.findByIdAndUpdate(
      id,
      updateCommentDto,
      { new: true },
    );
    if (!updatedComment || updatedComment == null) {
      return {
        success: false,
        status: 404,
        message: 'Comment not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: updatedComment,
    };
  }

  async remove(id: string): Promise<IResponseMessage> {
    const deletedComment = await this.commentModel.findByIdAndDelete(id);
    if (!deletedComment || deletedComment == null) {
      return {
        success: false,
        status: 404,
        message: 'Comment not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: deletedComment,
    };
  }
}
