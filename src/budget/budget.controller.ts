import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() budget: { name: string; amount: number }) {
    return this.budgetService.create(budget);
  }

  @Get()
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.budgetService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() budget: Partial<{ name: string; amount: number }>,
  ) {
    return this.budgetService.update(+id, budget);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.budgetService.delete(+id);
  }
}
