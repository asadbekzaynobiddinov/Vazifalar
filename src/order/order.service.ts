import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const newOrder = this.orderRepo.create(createOrderDto);
    return await this.orderRepo.save(newOrder);
  }

  async findAll() {
    return this.orderRepo.find();
  }

  async findOne(id: number) {
    return await this.orderRepo.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepo.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return await this.orderRepo.delete(id);
  }
}
