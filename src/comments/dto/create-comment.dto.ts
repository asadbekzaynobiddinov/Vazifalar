import { IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly post_id: string;
}
