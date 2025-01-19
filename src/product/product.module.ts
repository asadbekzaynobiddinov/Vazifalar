import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from 'src/logger/logger.module';
import { LogtailLoggerService } from 'src/logger/logger.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    JwtModule.register({
      secret: 'MySecretKey',
    }),
    LoggerModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, LogtailLoggerService, PrismaService],
})
export class ProductModule {}
