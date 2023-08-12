import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


export const Role = sequelize.define('role', {
    role_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
       
    }, { timestamps: false });

 