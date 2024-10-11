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


describe('DELETE /v1/users/:id', () => {
    
   // Test para verificar el error de un ID no válido
  it('should return an error if the id is not a number', async () => {
    const response = await request.delete('/v1/users/abc');
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('El id debe ser un número entero');
  });

});