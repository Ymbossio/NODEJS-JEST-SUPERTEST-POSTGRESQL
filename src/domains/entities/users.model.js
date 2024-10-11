import { Model, DataTypes } from "sequelize";

const USUARIOS_TABLES = 'usuarios';

export class Usuarios extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: USUARIOS_TABLES,
            modelName: 'Usuarios',
            timestamps: false
        }
    }
}


export const UsuariosSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    correo:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'correo'
    },
    telefono:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'telefono'
    }
}

