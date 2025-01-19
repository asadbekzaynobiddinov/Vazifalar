import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { LogtailLoggerService } from '../logger/logger.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LogtailLoggerService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    this.logger.log(`Product created: ${createProductDto.name}`);
    return await this.prisma.product.create({ data: createProductDto });
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.product.findMany({
        skip: offset,
        take: limit,
      }),
      this.prisma.product.count(),
    ]);

    this.logger.log(`Returned all products`);
    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    this.logger.log(`Returned product with ID: ${id}`);
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    this.logger.log(`Product with ID: ${id} updated`);
    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`Product with ID: ${id} deleted`);
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
