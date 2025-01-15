import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepo.create(createProductDto);
    return this.productRepo.save(newProduct);
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: number) {
    return await this.productRepo.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepo.update(id, updateProductDto);
  }

  async remove(id: number) {
    return await this.productRepo.delete(id);
  }
}
