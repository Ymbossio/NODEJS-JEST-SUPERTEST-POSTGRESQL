import * as dotenv from 'dotenv';
import { Usuarios } from '../entities/users.model.js';

dotenv.config();

export const config = {
  dialect: process.env.NODE_DIALECT || 'postgres',  // Asegúrate de que el dialecto esté definido
  host: process.env.NODE_HOST,
  username: process.env.NODE_USER,
  password: process.env.NODE_PASSWORD,
  port: process.env.NODE_PORT,
  database: process.env.NODE_DATABASE,
  dialectOptions: {
   /* ssl: {
      require: false,
      rejectUnauthorized: false // Ten cuidado al usar esto en producción
    } */
  },
  models: [Usuarios],
  logging: false,
};
