import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductService } from './order-product.service';
import { OrderProductController } from './order-product.controller';
import { OrderProduct } from './entities/order-product.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from 'src/logger/logger.module';
import { LogtailLoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderProduct]),
    JwtModule.register({
      secret: 'MySecretKey',
    }),
    LoggerModule,
  ],
  controllers: [OrderProductController],
  providers: [OrderProductService, LogtailLoggerService],
})
export class OrderProductModule {}
