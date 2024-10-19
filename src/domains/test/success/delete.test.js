import supertest from 'supertest';
import { app } from '../../../index.js';
import { sequelize } from '../../infrastructure/sequelize.js';
import UsuariosServices from "../../services/users.service.js";


const service = new UsuariosServices();

const request = supertest(app);

let idUser;

beforeAll(async () => {
  await sequelize.sync({ force: true });

  const response = await service.create({nombre: 'Test User', correo: 'test@example.com', telefono: '12340789'});
  idUser = response.id;

});

afterAll(async () => {
  await sequelize.close();
});


describe('DELETE /v1/users/:id', () => {

  //Test si el regitro se eliminó
  it('should delete the user when the id is valid', async () => { 
    const response = await request.delete(`/v1/users/${idUser}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBe("Registro eliminado exitosamente");
  });


});