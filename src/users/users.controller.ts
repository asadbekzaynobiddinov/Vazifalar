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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { responseHandler } from 'src/utils/response.handler';
import { responseMessage } from 'src/utils/response.message';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const result: responseMessage =
      await this.usersService.create(createUserDto);
    responseHandler(result, res);
  }

  @Get()
  async findAll(
    @Query() query: { page: number; limit: number },
    @Res() res: Response,
  ) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const result: responseMessage = await this.usersService.findAll(
      page,
      limit,
    );
    responseHandler(result, res);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result: responseMessage = await this.usersService.findOne(id);
    responseHandler(result, res);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    const result: responseMessage = await this.usersService.update(
      id,
      updateUserDto,
    );
    responseHandler(result, res);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result: responseMessage = await this.usersService.remove(id);
    responseHandler(result, res);
  }
}
