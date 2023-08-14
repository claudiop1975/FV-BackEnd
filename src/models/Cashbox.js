import sequelize from "../db.js";
import {DataTypes} from 'sequelize'

export const Cashbox = sequelize.define('cashbox', {
    cashbox_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    cashbox_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cashbox_initial_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            timestamps: true,
        },
        cashbox_final_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            timestamps: true,
        },
    }, { timestamps: false });
