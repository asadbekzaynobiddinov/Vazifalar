import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { OrderProduct } from './entities/order-product.entity';
import { LogtailLoggerService } from '../logger/logger.service';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private readonly orderPRepo: Repository<OrderProduct>,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createOrderProductDto: CreateOrderProductDto) {
    this.logger.log(`OrderProduct created: ${createOrderProductDto}`);
    const newOrderProduct = this.orderPRepo.create(createOrderProductDto);
    return await this.orderPRepo.save(newOrderProduct);
  }

  async findAll(page, limit) {
    const offset = (page - 1) * limit;

    const [data, total] = await this.orderPRepo.findAndCount({
      take: limit,
      skip: offset,
    });
    this.logger.log(`Returned all order-products`);
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(page / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned order-product with ID: ${id}`);
    return await this.orderPRepo.findOne({ where: { id } });
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    this.logger.log(`OrderProduct with ID: ${id} updated`);
    return await this.orderPRepo.update(id, updateOrderProductDto);
  }

  async remove(id: number) {
    this.logger.log(`OrderProduct with ID: ${id} deleted`);
    return await this.orderPRepo.delete(id);
  }
}
