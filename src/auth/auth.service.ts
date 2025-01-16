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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwt: JwtService,
  ) {}
  async register(user: CreateUserDto) {
    const { email } = user;

    const userExists = await this.userRepo.findOne({ where: { email } });
    if (!userExists) {
      throw new ConflictException('Email already exists');
    }

    const newUser = this.userRepo.create(user);
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

    return {
      accessToken,
      refreshToken,
    };
  }
}
