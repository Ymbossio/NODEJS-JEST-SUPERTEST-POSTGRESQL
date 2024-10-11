import supertest from 'supertest';
import { app } from '../../index.js';
import { sequelize } from '../infrastructure/sequelize.js';

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});


describe('GET /v1/users (error handling)', () => {
    it('should return a list of users', async () => {
      const response = await request.get('/v1/users');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        data: []
      });
    });
  });