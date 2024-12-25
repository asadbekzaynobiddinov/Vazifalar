import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;
}
