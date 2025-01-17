import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Product Name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'Product Info' })
  @IsString()
  @IsNotEmpty()
  info: string;

  @ApiProperty({ example: 10 })
  @IsString()
  @IsNotEmpty()
  quantity: number;
}
