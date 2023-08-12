import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


export const Order = sequelize.define('order', {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        order_address:{
            type: DataTypes.STRING,
            allowNull: false
        }
       
    }, { timestamps: false });

