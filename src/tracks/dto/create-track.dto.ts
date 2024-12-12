import { IsString, Min } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @Min(3)
  readonly name: string;

  @IsString()
  readonly artistId: string;
}
