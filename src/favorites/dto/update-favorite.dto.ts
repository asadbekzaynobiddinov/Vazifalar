import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteDto } from './create-favorite.dto';
import { IsString } from 'class-validator';

export class UpdateFavoriteDto extends PartialType(CreateFavoriteDto) {
  @IsString()
  readonly albumId?: string;
}
