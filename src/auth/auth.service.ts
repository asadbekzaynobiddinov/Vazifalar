import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { hashPassword, comparePassword } from 'src/utils/bcrypt';
import { IResponseMessage } from 'src/utils/response.message';

interface ILoginMessage extends IResponseMessage {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async register(user: CreateUserDto): Promise<IResponseMessage> {
    const userExists: Array<CreateUserDto> = await this.userModel.find({
      email: user.email,
    });

    if (userExists.length > 0) {
      return {
        success: false,
        status: 409,
        message: 'Email already exists',
      };
    }

    const newUser = new this.userModel(user);
    newUser.password = await hashPassword(newUser.password);

    await newUser.save();
    const userObject = newUser.toObject();

    delete userObject.password;
    return {
      success: true,
      status: 201,
      message: userObject,
    };
  }

  async login(user: CreateAuthDto): Promise<ILoginMessage> {
    const foundUser = await this.userModel.findOne({ email: user.email });
    if (!foundUser || foundUser == null) {
      return {
        success: false,
        status: 400,
        message: 'Email or password incorrect',
        accessToken: '',
        refreshToken: '',
      };
    }

    const passwordEqual = await comparePassword(
      user.password,
      foundUser.password,
    );
    if (!passwordEqual) {
      return {
        success: false,
        status: 400,
        message: 'Email or password incorrect',
        accessToken: '',
        refreshToken: '',
      };
    }
    const payload = {
      userId: foundUser._id,
      email: foundUser.email,
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1d' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    return {
      success: true,
      status: 200,
      message: 'Congratulations',
      accessToken,
      refreshToken,
    };
  }
}
