import sequelize from "../db.js";
import {DataTypes} from 'sequelize'

export const Product = sequelize.define('product', {
    product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_presentation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_price:{
            type:DataTypes.FLOAT,
            allowNull: false,
        }
        
    }, { timestamps: false });
