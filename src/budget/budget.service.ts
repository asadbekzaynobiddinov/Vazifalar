import { Injectable } from '@nestjs/common';

export interface Budget {
  id: number;
  name: string;
  amount: number;
}

@Injectable()
export class BudgetService {
  private budgets: Budget[] = [];

  create(budget: Omit<Budget, 'id'>): Budget {
    const newBudget: Budget = { id: Date.now(), ...budget };
    this.budgets.push(newBudget);
    return newBudget;
  }

  findAll(): Budget[] {
    return this.budgets;
  }

  findOne(id: number): Budget | undefined {
    return this.budgets.find((budget) => budget.id === id);
  }

  update(
    id: number,
    updatedBudget: Partial<Omit<Budget, 'id'>>,
  ): Budget | undefined {
    const budgetIndex = this.budgets.findIndex((budget) => budget.id === id);
    if (budgetIndex === -1) return undefined;

    this.budgets[budgetIndex] = {
      ...this.budgets[budgetIndex],
      ...updatedBudget,
    };
    return this.budgets[budgetIndex];
  }

  delete(id: number): boolean {
    const initialLength = this.budgets.length;
    this.budgets = this.budgets.filter((budget) => budget.id !== id);
    return this.budgets.length < initialLength;
  }
}
