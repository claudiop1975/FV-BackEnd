import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export  const  StockDiference = sequelize.define('stock_diference', {
    stock_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    stock_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    stock_diference: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }, { timestamps: false });