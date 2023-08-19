import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


// * Analizar relaciones y campos para el correcto registro de movimientos de caja

export const CashboxMoves = sequelize.define('cashbox_moves', {//!relacionar con cashboxId
    cashbox_moves_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cashbox_moves_income: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        min: 0
    },
    cashbox_moves_outcome: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        min: 0
    },
    cashbox_moves_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cashbox_moves_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    
}, { timestamps: true });

