import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './order-product/order-product.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'MySecretKey',
    }),
    UserModule,
    ProductModule,
    OrderModule,
    OrderProductModule,
    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule {}
