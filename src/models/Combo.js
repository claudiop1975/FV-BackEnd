import sequelize from "../db.js";
import {DataTypes} from 'sequelize'

export const Combo = sequelize.define('combo', {
    combo_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        combo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
       
    }, { timestamps: false });

