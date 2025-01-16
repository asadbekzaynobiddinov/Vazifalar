import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductService } from './order-product.service';
import { OrderProductController } from './order-product.controller';
import { OrderProduct } from './entities/order-product.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderProduct]),
    JwtModule.register({
      secret: 'MySecretKey',
    }),
  ],
  controllers: [OrderProductController],
  providers: [OrderProductService],
})
export class OrderProductModule {}
