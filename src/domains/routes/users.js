import { Router } from "express";
import { getOneUser, getAllUsers, createUser, deleteUser, updateUser } from "../controllers/users.controller.js";
import schema from '../middleware/schemas.js'
import Validator from "../middleware/Validator.js";

const router = Router();


router
    .get('/users/', getAllUsers)
    .get('/users/:id', Validator(schema.getOneUser), getOneUser)
    .post('/users', Validator(schema.createUser), createUser)
    .put('/users/:id', Validator(schema.updateUser), updateUser)
    .delete('/users/:id', deleteUser)
export default router;