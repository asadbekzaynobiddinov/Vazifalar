import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  product_id: number;

  @Column()
  user_id: number;

  @Column()
  total_price: number;

  @Column({ default: false })
  status: boolean;
}
