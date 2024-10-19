import Joi from "joi";

export default {
    getOneUser: Joi.object({
        id: Joi.number().required()
    }),
    
    createUser: Joi.object({
        nombre: Joi.string().required(),
        correo: Joi.string().email().required(),
        telefono: Joi.string().required()
    }),

    updateUser: Joi.object({
        nombre: Joi.string().optional(),
        correo: Joi.string().email().optional(),
        telefono: Joi.string().optional()
    })


}