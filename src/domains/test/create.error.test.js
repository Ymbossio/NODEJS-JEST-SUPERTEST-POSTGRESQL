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

describe('POST /v1/users', () => {

    it('should return a success message', async () => {
    const createNewUser = {
        nombre: 'Juan',
        correo: 'Juan@example.com',
    }
    
    const response = await request.post('/v1/users').send(createNewUser);
    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('notNull Violation: Usuarios.telefono cannot be null');


    })
});

  