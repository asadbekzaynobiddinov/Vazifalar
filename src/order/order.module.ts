import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    JwtModule.register({
      secret: 'MySecretKey',
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
