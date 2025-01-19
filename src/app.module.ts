import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './order-product/order-product.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'api',
        ttl: 60,
        limit: 10,
      },
    ]),
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
  providers: [PrismaService],
})
export class AppModule {}
