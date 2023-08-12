import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


export const Shift = sequelize.define('shift', {
    shift_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        shift_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        shift_start:{
            type:DataTypes.TIME,
            allowNull: false,
        },
        shift_end:{
            type:DataTypes.TIME,
            allowNull: false,
        }
       
    }, { timestamps: false });

