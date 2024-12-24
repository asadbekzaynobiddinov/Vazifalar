import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('BudgetController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/budget (POST)', () => {
    return request(app.getHttpServer())
      .post('/budget')
      .send({ name: 'Test Budget', amount: 200 })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Test Budget');
      });
  });

  it('/budget (GET)', () => {
    return request(app.getHttpServer())
      .get('/budget')
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
