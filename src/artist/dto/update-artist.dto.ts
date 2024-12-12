import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './create-artist.dto';
import { IsBoolean, IsString, Min } from 'class-validator';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {
  @IsString()
  @Min(3)
  readonly name?: string;

  @IsBoolean()
  readonly grammy?: boolean;
}
