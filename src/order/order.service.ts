import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { LogtailLoggerService } from 'src/logger/logger.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    this.logger.log(`Order created}`);
    const newOrder = this.orderRepo.create(createOrderDto);
    return await this.orderRepo.save(newOrder);
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const [data, total] = await this.orderRepo.findAndCount({
      take: limit,
      skip: offset,
    });

    this.logger.log(`Returned all orders`);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(page / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned order with ID: ${id}`);
    return await this.orderRepo.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    this.logger.log(`Order with ID: ${id} updated`);
    return await this.orderRepo.update(id, updateOrderDto);
  }

  async remove(id: number) {
    this.logger.log(`Order with ID: ${id} deleted`);
    return await this.orderRepo.delete(id);
  }
}
