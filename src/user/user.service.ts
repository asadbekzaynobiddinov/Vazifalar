import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LogtailLoggerService } from '../logger/logger.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    this.logger.log(`User created: ${newUser.email}`);
    return await this.userRepository.save(newUser);
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const [data, total] = await this.userRepository.findAndCount({
      take: limit,
      skip: offset,
    });
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
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log(`User with ID: ${id} updated`);
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    this.logger.log(`User with ID: ${id} deleted`);
    return await this.userRepository.delete(id);
  }
}
