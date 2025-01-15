import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'order_product' })
export class OrderProduct {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  order_id: number;

  @Column()
  product_id: number;
}
