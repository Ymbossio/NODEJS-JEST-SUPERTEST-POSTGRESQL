import supertest from 'supertest';
import { app } from '../../../index.js';
import { sequelize } from '../../infrastructure/sequelize.js';

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync({ force: false });
});

afterAll(async () => {
  await sequelize.close();
});

describe('GET /v1/users', () => {
  it('should return a list of users', async () => {

    const response = await request.get('/v1/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          nombre: expect.any(String),
          correo: expect.any(String),
          telefono: expect.any(String)
        })
      ]),
      success: true
    });

  });
});
