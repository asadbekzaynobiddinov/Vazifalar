import { Injectable } from '@nestjs/common';
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
  async register(createAuthDto: CreateUserDto) {
    const newUser = this.userRepo.create(createAuthDto);
    return await this.userRepo.save(newUser);
  }

  async login(createAuthDto: Pick<CreateUserDto, 'email' | 'password'>) {
    const token = this.jwt.sign(createAuthDto, {
      expiresIn: '1d',
    });
    return token;
  }
}
