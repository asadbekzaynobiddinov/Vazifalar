import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { OrderProduct } from './entities/order-product.entity';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private readonly orderPRepo: Repository<OrderProduct>,
  ) {}
  async create(createOrderProductDto: CreateOrderProductDto) {
    const newOrderProduct = this.orderPRepo.create(createOrderProductDto);
    return await this.orderPRepo.save(newOrderProduct);
  }

  async findAll() {
    return this.orderPRepo.find();
  }

  async findOne(id: number) {
    return await this.orderPRepo.findOne({ where: { id } });
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    return await this.orderPRepo.update(id, updateOrderProductDto);
  }

  async remove(id: number) {
    return await this.orderPRepo.delete(id);
  }
}
