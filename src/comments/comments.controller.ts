import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { responseHandler } from 'src/utils/response.handler';
import { IResponseMessage } from 'src/utils/response.message';
import { Response } from 'express';
import { AuthGuard } from 'src/middlewares';

@UseGuards(AuthGuard)
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Res() res: Response,
  ) {
    const result: IResponseMessage =
      await this.commentsService.create(createCommentDto);
    responseHandler(result, res);
  }

  @Get()
  async findAll(
    @Query() query: { page: number; limit: number },
    @Res() res: Response,
  ) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const result: IResponseMessage = await this.commentsService.findAll(
      page,
      limit,
    );
    responseHandler(result, res);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result: IResponseMessage = await this.commentsService.findOne(id);
    responseHandler(result, res);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Res() res: Response,
  ) {
    const result: IResponseMessage = await this.commentsService.update(
      id,
      updateCommentDto,
    );
    responseHandler(result, res);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result: IResponseMessage = await this.commentsService.remove(id);
    responseHandler(result, res);
  }
}
