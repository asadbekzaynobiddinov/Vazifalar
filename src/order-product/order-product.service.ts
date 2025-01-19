import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { LogtailLoggerService } from '../logger/logger.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createOrderProductDto: CreateOrderProductDto) {
    this.logger.log(`OrderProduct created: ${createOrderProductDto}`);
    return await this.prisma.orderProduct.create({
      data: createOrderProductDto,
    });
  }

  async findAll(page, limit) {
    const offset = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.orderProduct.findMany({
        skip: offset,
        take: limit,
      }),
      this.prisma.orderProduct.count(),
    ]);

    this.logger.log(`Returned all order-products`);
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned order-product with ID: ${id}`);
    return await this.prisma.orderProduct.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    this.logger.log(`OrderProduct with ID: ${id} updated`);
    return await this.prisma.orderProduct.update({
      where: { id },
      data: updateOrderProductDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`OrderProduct with ID: ${id} deleted`);
    return await this.prisma.orderProduct.delete({
      where: { id },
    });
  }
}
