import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { LogtailLoggerService } from '../logger/logger.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    this.logger.log(`Product created: ${createProductDto.name}`);
    const newProduct = this.productRepo.create(createProductDto);
    return this.productRepo.save(newProduct);
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const [data, total] = await this.productRepo.findAndCount({
      take: limit,
      skip: offset,
    });

    this.logger.log(`Returned all products`);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(page / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned product with ID: ${id}`);
    return await this.productRepo.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    this.logger.log(`Product with ID: ${id} updated`);
    return await this.productRepo.update(id, updateProductDto);
  }

  async remove(id: number) {
    this.logger.log(`Product with ID: ${id} deleted`);
    return await this.productRepo.delete(id);
  }
}
