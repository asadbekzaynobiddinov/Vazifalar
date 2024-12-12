import { IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  readonly trackId: string;
}
