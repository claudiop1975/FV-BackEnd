import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export  const  Stock_diference = sequelize.define('stock_diference', {
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
    /* product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, */ //!relaciones ????
    stock_diference: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }, { timestamps: false });