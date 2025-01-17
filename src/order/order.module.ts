import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from 'src/logger/logger.module';
import { LogtailLoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    JwtModule.register({
      secret: 'MySecretKey',
    }),
    LoggerModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, LogtailLoggerService],
})
export class OrderModule {}
