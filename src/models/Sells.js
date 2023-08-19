import sequelize from "../db.js";
import {DataTypes} from 'sequelize'





export const Sells = sequelize.define('sells', {
    sell_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
}, { timestamps: true });

