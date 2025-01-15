import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Order } from '../order/entities/order.entity';
import { Product } from '../product/entities/product.entity';
import { OrderProduct } from '../order-product/entities/order-product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'k7119zamu',
      entities: [User, Product, Order, OrderProduct],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
