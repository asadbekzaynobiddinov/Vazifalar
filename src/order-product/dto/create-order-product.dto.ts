import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrderProductDto {
  @IsNumber()
  @IsNotEmpty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  product_id: number;
}
