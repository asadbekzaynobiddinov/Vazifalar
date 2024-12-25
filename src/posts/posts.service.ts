import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IResponseMessage } from 'src/utils/response.message';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModule: Model<Post>,
  ) {}
  async create(createPostDto: CreatePostDto): Promise<IResponseMessage> {
    const newPost = new this.postModule(createPostDto);
    await newPost.save();
    if (!newPost || newPost == null) {
      return {
        success: false,
        status: 500,
        message: 'Internal server Error',
      };
    }
    return {
      success: true,
      status: 201,
      message: newPost,
    };
  }

  async findAll(page: number, limit: number): Promise<IResponseMessage> {
    const skip = (page - 1) * limit;
    const posts = await this.postModule.find().skip(skip).limit(limit);
    if (posts.length === 0) {
      return {
        success: false,
        status: 404,
        message: 'Posts not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: posts,
    };
  }

  async findOne(id: string): Promise<IResponseMessage> {
    const post = await this.postModule.findById(id);
    if (!post || post == null) {
      return {
        success: false,
        status: 204,
        message: post,
      };
    }
    return {
      success: true,
      status: 200,
      message: post,
    };
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
  ): Promise<IResponseMessage> {
    const updatedPost = await this.postModule.findByIdAndUpdate(
      id,
      updatePostDto,
      {
        new: true,
      },
    );
    if (!updatedPost || updatedPost == null) {
      return {
        success: false,
        status: 404,
        message: 'Post not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: updatedPost,
    };
  }

  async remove(id: string): Promise<IResponseMessage> {
    const deletedPost = await this.postModule.findByIdAndDelete(id);
    if (!deletedPost || deletedPost == null) {
      return {
        success: false,
        status: 404,
        message: 'Post not found',
      };
    }
    return {
      success: true,
      status: 200,
      message: deletedPost,
    };
  }
}
