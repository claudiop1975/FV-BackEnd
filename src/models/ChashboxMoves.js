import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


// * Analizar relaciones y campos para el correcto registro de movimientos de caja

export const CashboxMoves = sequelize.define('cashbox_moves', {//!relacionar con cashboxId
    cashbox_moves_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cashbox_moves_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cashbox_moves_hour: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    cashbox_moves_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cashbox_moves_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cashbox_moves_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    cashboxId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    
    // cashbox_moves_id: { //!chequear si este modelo o el de arriba va mejor.
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    // cashbox_moves_amount: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    // cashbox_moves_type: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
}, { timestamps: true });

// CashboxMoves.belongsTo(Cashbox, {foreignKey: 'cashboxId', targetKey: 'cashbox_id'}); //!relacionar con cashboxId