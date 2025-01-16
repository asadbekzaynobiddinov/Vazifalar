import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { AuthGuard } from 'src/middlewares/guards/auth.guard';
import { RoleGuard } from 'src/middlewares/guards/role.guard';

@UseGuards(AuthGuard)
@Controller('order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.orderProductService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderProductService.findOne(+id);
  }

  @UseGuards(RoleGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(+id, updateOrderProductDto);
  }

  @UseGuards(RoleGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(+id);
  }
}
