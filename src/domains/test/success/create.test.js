import supertest from 'supertest';
import { app } from '../../../index.js';
import { sequelize } from '../../infrastructure/sequelize.js';

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('POST /v1/users', () => {

    it('should return a success message', async () => {
    const createNewUser = {
        nombre: 'Juan',
        correo: 'juan@example.com',
        telefono: '123456789'
    }
    
    const response = await request.post('/v1/users').send(createNewUser);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({
        id: expect.any(Number),
        nombre: expect.any(String),
        correo: expect.any(String),
        telefono: expect.any(String)
      })
    });
    })
});

  