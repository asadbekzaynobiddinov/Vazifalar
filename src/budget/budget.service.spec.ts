import { Test, TestingModule } from '@nestjs/testing';
import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetService],
    }).compile();

    service = module.get<BudgetService>(BudgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a budget', () => {
    const budget = service.create({ name: 'Test Budget', amount: 1000 });
    expect(budget).toHaveProperty('id');
    expect(budget.name).toBe('Test Budget');
    expect(budget.amount).toBe(1000);
  });

  it('should find all budgets', () => {
    service.create({ name: 'Budget 1', amount: 500 });
    service.create({ name: 'Budget 2', amount: 1500 });
    expect(service.findAll().length).toBe(2);
  });

  it('should update a budget', () => {
    const budget = service.create({ name: 'Old Budget', amount: 700 });
    const updated = service.update(budget.id, { name: 'Updated Budget' });
    expect(updated.name).toBe('Updated Budget');
  });

  it('should delete a budget', () => {
    const budget = service.create({ name: 'Delete Budget', amount: 300 });
    const deleted = service.delete(budget.id);
    expect(deleted).toBe(true);
  });
});
