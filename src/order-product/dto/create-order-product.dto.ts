import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrderProductDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  order_id: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  product_id: number;
}
