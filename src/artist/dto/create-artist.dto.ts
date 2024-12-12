import { IsBoolean, IsString, Min } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @Min(3)
  readonly name: string;

  @IsBoolean()
  readonly grammy: boolean;
}
