import sequelize from "../db.js";
import {DataTypes} from 'sequelize'

export const Client = sequelize.define('client', {
    client_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        client_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        client_address:{
            type: DataTypes.STRING,
        },
        client_phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
