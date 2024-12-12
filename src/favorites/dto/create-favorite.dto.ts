import { IsString } from 'class-validator';

export class CreateFavoriteDto {
  @IsString()
  readonly albumId: string;
}
