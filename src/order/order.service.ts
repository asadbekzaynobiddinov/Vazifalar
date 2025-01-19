import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { LogtailLoggerService } from 'src/logger/logger.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    this.logger.log(`Order created: ${createOrderDto}`);
    return await this.prisma.order.create({
      data: createOrderDto,
    });
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.order.findMany({
        skip: offset,
        take: limit,
      }),
      this.prisma.order.count(),
    ]);

    this.logger.log(`Returned all orders`);
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned order with ID: ${id}`);
    return await this.prisma.order.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    this.logger.log(`Order with ID: ${id} updated`);
    return await this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`Order with ID: ${id} deleted`);
    return await this.prisma.order.delete({
      where: { id },
    });
  }
}
