import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LogtailLoggerService } from '../logger/logger.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    this.logger.log(`User created: ${createUserDto.email}`);
    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.user.findMany({
        skip: offset,
        take: limit,
      }),
      this.prisma.user.count(),
    ]);

    this.logger.log(`Returned all users`);
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned user with ID: ${id}`);
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log(`User with ID: ${id} updated`);
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`User with ID: ${id} deleted`);
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
