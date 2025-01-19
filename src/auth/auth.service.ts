import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LogtailLoggerService } from 'src/logger/logger.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly logger: LogtailLoggerService,
    private readonly jwt: JwtService,
  ) {}
  async register(user: CreateUserDto) {
    const { email } = user;

    const userExists = await this.userRepo.findOne({ where: { email } });
    if (!userExists) {
      throw new ConflictException('Email already exists');
    }

    const newUser = this.userRepo.create(user);
    this.logger.log(`User created: ${newUser.email}`);
    return await this.userRepo.save(newUser);
  }

  async login(user: Pick<CreateUserDto, 'email' | 'password'>) {
    const { email } = user;

    const userExists = await this.userRepo.findOne({ where: { email } });

    if (!userExists) {
      throw new BadRequestException('EMail or password incorrect');
    }

    if (userExists.password != user.password) {
      throw new BadRequestException('Email or password incorrect');
    }

    const accessToken = this.jwt.sign(user, {
      expiresIn: '1d',
    });

    const refreshToken = this.jwt.sign(user, {
      expiresIn: '7d',
    });

    this.logger.log(`User logged in: ${user.email}`);

    return {
      accessToken,
      refreshToken,
    };
  }
}
