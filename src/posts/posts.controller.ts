import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';
import { IResponseMessage } from 'src/utils/response.message';
import { responseHandler } from 'src/utils/response.handler';
import { AuthGuard } from 'src/middlewares';

@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
    const result: IResponseMessage =
      await this.postsService.create(createPostDto);
    responseHandler(result, res);
  }

  @Get()
  async findAll(
    @Query() query: { page: number; limit: number },
    @Res() res: Response,
  ) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const result: IResponseMessage = await this.postsService.findAll(
      page,
      limit,
    );
    responseHandler(result, res);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result: IResponseMessage = await this.postsService.findOne(id);
    responseHandler(result, res);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Res() res: Response,
  ) {
    const result: IResponseMessage = await this.postsService.update(
      id,
      updatePostDto,
    );
    responseHandler(result, res);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result: IResponseMessage = await this.postsService.remove(id);
    responseHandler(result, res);
  }
}
