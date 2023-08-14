import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export  const  Stock = sequelize.define('stock', {
    stock_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    stock_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, { timestamps: false });