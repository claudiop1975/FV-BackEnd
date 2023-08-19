import sequelize from "../db.js";
import {DataTypes} from 'sequelize'

export const Cashbox = sequelize.define('cashbox', {
cashbox_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }

    }, { timestamps: false });
